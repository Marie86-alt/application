import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRouter } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.155:3000/login', {
        email,
        password,
      });
      console.log('Réponse de connexion :', response.data);

      const { token } = response.data;
      if(token) {
      await AsyncStorage.setItem('token', token);

      // Navigation vers le profil après connexion réussie
      router.replace('/(tabs)/explore');
      } else {
        Alert.alert('Erreur', 'Connexion échouée. Veuillez vérifier vos informations)');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erreur', 'Connexion échouée. Veuillez vérifier vos informations.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Se connecter" onPress={handleLogin} />
      <Text style={{ textAlign: 'center', marginVertical: 15 }}>ou</Text>
      <Button title="Créer un compte" onPress={() => router.push('/(tabs)/register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Login;
