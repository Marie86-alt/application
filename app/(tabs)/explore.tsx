import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Button, TextInput, ImageBackground } from 'react-native';

const Explore = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const router = useRouter(); // Utilisation de useRouter pour la navigation

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://192.168.1.155:3000/users'); // Modifie cette adresse si nécessaire
      const data = await response.json();
      console.log('Données récupérées :', data); // Vérifie la structure des données ici
      setUsers(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
    }
  };

  const addUser = async () => {
    if (name === '' || email === '' || password === '') {
      alert('Veuillez remplir tous les champs');
      return;
    }
    try {
      const response = await fetch('http://192.168.1.155:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      console.log('Utilisateur ajouté :', data);
      fetchUsers(); // Rafraîchit la liste des utilisateurs
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ImageBackground
      source={require('@/assets/images/vert.webp')} // Assure-toi que l'image existe dans le dossier assets
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeMessage}>Bienvenue sur EcoVie!</Text>
        <Text style={styles.catchPhrase}>
          "Faites un petit geste pour un grand impact environnemental!"
        </Text>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Ajouter un utilisateur</Text>
          <TextInput
            style={styles.input}
            placeholder="Nom"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.buttonContainer}>
            <Button title="Ajouter un utilisateur" onPress={addUser} />
          </View>
        </View>

        {/* Bouton pour voir les habitudes écologiques */}
        <View style={styles.buttonContainer}>
          <Button
            title="Voir Habitudes Écologiques"
            onPress={() => router.push('/ecohabits')} // Naviguer vers la page EcoHabits
          />
        </View>
         {/* Ajouter un bouton pour naviguer vers la page EcoHabitsChart */}
         <View style={styles.buttonContainer}>
          <Button 
          title="Voir Graphique Écologiques" 
          onPress={() => router.push('./(tabs)/ecochart')} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)', // Ajoute un overlay sombre
    padding: 20,
    flex: 1,
    justifyContent: 'center', // Centre verticalement
    alignItems: 'center', // Centre horizontalement
  },
  welcomeMessage: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  catchPhrase: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  formContainer: {
    width: '80%', // Ajuste la largeur du formulaire
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Légère transparence pour le fond
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
   
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
  },
});

export default Explore;
 