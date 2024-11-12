
//import React from 'react';
import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet, Animated } from 'react-native';

const Home = () => {
   // Initialiser l'animation avec une opacité de 0
   const fadeAnim = useRef(new Animated.Value(0)).current;

   useEffect(() => {
     // Lancer l'animation pour faire apparaître progressivement le texte
     Animated.timing(fadeAnim, {
       toValue: 1, // Opacité finale
       duration: 4000, // Durée de l'animation
       useNativeDriver: true,
     }).start();
   }, []);
  return (
    <ImageBackground
      source={require('@/assets/images/ecolo.webp')} // Assure-toi que l'image est dans le bon dossier
      style={styles.background}
    >
      <View style={styles.container}>
        <Animated.Text style={[styles.welcome, { opacity:fadeAnim}]}>Bienvenue sur EcoVies</Animated.Text>
        <Animated.Text style={[styles.message, {opacity: fadeAnim}]}>Adoptez un mode de vie éco-responsable dès aujourd'hui !</Animated.Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Home;
