// // /components/EcoHabitsChart.tsx
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { VictoryChart, VictoryBar, VictoryTheme } from 'victory-native';
// import axios from 'axios';

// const EcoHabitsChart = () => {
//   const [ecoData, setEcoData] = useState([]);

//   useEffect(() => {
//     const fetchEcoData = async () => {
//       try {
//         const response = await axios.get('http://192.168.1.155:3000/ecohabits');
//         setEcoData(response.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des données', error);
//       }
//     };

//     fetchEcoData();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Graphiques des Habitudes Écologiques</Text>

//       <VictoryChart theme={VictoryTheme.material}>
//         <VictoryBar
//           data={ecoData}
//           x="createdAt"
//           y="energyConsumption"
//           style={{ data: { fill: 'tomato' } }}
//         />
//       </VictoryChart>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
// });

// export default EcoHabitsChart;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory';
import axios from 'axios';

const EcoHabitsChart = () => {
  const [ecoData, setEcoData] = useState([
    { createdAt: '2024-01-01', energyConsumption: 10 },
    { createdAt: '2024-01-02', energyConsumption: 20 },
    { createdAt: '2024-01-03', energyConsumption: 30 },
  ]);

  useEffect(() => {
    // Exemple de requête à remplacer par une vraie requête API
    const fetchEcoData = async () => {
      try {
        const response = await axios.get('http://192.168.1.155:3000/ecohabits');
        setEcoData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };

    fetchEcoData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Graphique des Habitudes Écologiques</Text>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryBar data={ecoData} x="createdAt" y="energyConsumption" />
      </VictoryChart>
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
});

export default EcoHabitsChart;
