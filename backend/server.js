const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const app = express();
const port = 3000;

// Clé secrète pour JWT
const jwtSecret = 'ton_secret_jwt';

// Connexion à la base de données MySQL
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'Ecovie',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connecté à MySQL');
});

app.use(express.json());

// Middleware pour vérifier le token JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token manquant' });

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token invalide' });
    req.user = user;
    next();
  });
};

// Route d'inscription
app.post(
  '/register',
  [
    check('name', 'Le nom est requis').not().isEmpty(),
    check('email', 'L\'adresse e-mail est invalide').isEmail(),
    check('password', 'Le mot de passe est requis').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erreur serveur' });
      }

      const user = { id: result.insertId, name, email };
      const token = jwt.sign(user, jwtSecret, { expiresIn: '1h' });
      res.json({ token });
    });
  }
);

// Route de connexion
app.post(
  '/login',
  [
    check('email', 'L\'adresse e-mail est invalide').isEmail(),
    check('password', 'Le mot de passe est requis').not().isEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], async (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erreur serveur' });
      }

      if (results.length === 0) {
        return res.status(400).json({ message: 'Utilisateur non trouvé' });
      }

      const user = results[0];

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(400).json({ message: 'Mot de passe incorrect' });
      }

      const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, jwtSecret, { expiresIn: '1h' });
      res.json({ token });
    });
  }
);

// Route protégée
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: `Bienvenue, ${req.user.name}` });
});

app.listen(port, () => {
  console.log(`Serveur backend tournant sur le port ${port}`);
});
