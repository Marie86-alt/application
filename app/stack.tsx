// /app/(tabs)/layout.tsx
import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="register"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="profile"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ecohabits"
        options={{ headerShown: true }}
        />
         <Stack.Screen
        name="EcoHabitsChart" // Ajoute la route pour EcoHabitsChart
        options={{ headerShown: true, title: 'Graphique Écologiques' }}
      />
    </Stack>
    
  );
}
