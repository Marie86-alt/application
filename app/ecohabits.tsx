// /app/ecohabits.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const EcoHabits = () => {
  const [energyConsumption, setEnergyConsumption] = useState('');
  const [waterConsumption, setWaterConsumption] = useState('');
  const [wasteGenerated, setWasteGenerated] = useState('');

  const submitData = async () => {
    if (!energyConsumption || !waterConsumption || !wasteGenerated) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.155:3000/ecohabits', {
        energyConsumption,
        waterConsumption,
        wasteGenerated,
      });

      if (response.data.success) {
        Alert.alert('Succès', 'Données soumises avec succès');
        setEnergyConsumption('');
        setWaterConsumption('');
        setWasteGenerated('');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erreur', 'Échec de l\'envoi des données');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suivi des Habitudes Écologiques</Text>

      <TextInput
        style={styles.input}
        placeholder="Consommation d'énergie (kWh)"
        value={energyConsumption}
        onChangeText={setEnergyConsumption}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Consommation d'eau (L)"
        value={waterConsumption}
        onChangeText={setWaterConsumption}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Déchets générés (kg)"
        value={wasteGenerated}
        onChangeText={setWasteGenerated}
        keyboardType="numeric"
      />

      <Button title="Soumettre" onPress={submitData} />
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
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default EcoHabits;
