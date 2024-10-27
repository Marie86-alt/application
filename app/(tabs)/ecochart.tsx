

// import React from 'react';
// import { View, Text, Dimensions } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';

// const MyChart = () => {
//   // Données simulées pour l'exemple
//   const energyData = [
//     Math.random() * 100, // Consommation d'énergie en kWh
//     Math.random() * 100,
//     Math.random() * 100,
//     Math.random() * 100,
//     Math.random() * 100,
//     Math.random() * 100
//   ];

//   const waterData = [
//     Math.random() * 100, // Consommation d'eau en litres
//     Math.random() * 100,
//     Math.random() * 100,
//     Math.random() * 100,
//     Math.random() * 100,
//     Math.random() * 100
//   ];

//   const wasteData = [
//     Math.random() * 100, // Déchets générés en kg
//     Math.random() * 100,
//     Math.random() * 100,
//     Math.random() * 100,
//     Math.random() * 100,
//     Math.random() * 100
//   ];

//   return (
//     <View>
//       <Text style={{ textAlign: 'center', fontSize: 18 }}>Suivi des Habitudes Écologiques</Text>
//       <Text style={{ textAlign: 'center', fontSize: 16 }}>Consommation d'énergie (kWh)</Text>
//       <LineChart
//         data={{
//           labels: ["Janv", "Fév", "Mars", "Avril", "Mai", "Juin"],
//           datasets: [
//             {
//               data: energyData,
//               color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Couleur pour l'énergie
//               strokeWidth: 2,
//             }
//           ]
//         }}
//         width={Dimensions.get("window").width }
//         height={220}
//         yAxisLabel="kWh"
//         yAxisSuffix=""
//         yAxisInterval={1}
//         chartConfig={{
//           backgroundColor: "#1E1E1E",
//           backgroundGradientFrom: "#4B4B4B",
//           backgroundGradientTo: "#1E1E1E",
//           decimalPlaces: 2,
//           color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//           propsForDots: {
//             r: "6",
//             strokeWidth: "2",
//             stroke: "#00FF00",
//           },
//         }}
//         bezier
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       />

//       <Text style={{ textAlign: 'center', fontSize: 16 }}>Consommation d'eau (litres)</Text>
//       <LineChart
//         data={{
//           labels: ["Janv", "Fév", "Mars", "Avril", "Mai", "Juin"],
//           datasets: [
//             {
//               data: waterData,
//               color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Couleur pour l'eau
//               strokeWidth: 2,
//             }
//           ]
//         }}
//         width={Dimensions.get("window").width}
//         height={220}
//         yAxisLabel="L"
//         yAxisSuffix=""
//         yAxisInterval={1}
//         chartConfig={{
//           backgroundColor: "#1E1E1E",
//           backgroundGradientFrom: "#4B4B4B",
//           backgroundGradientTo: "#1E1E1E",
//           decimalPlaces: 2,
//           color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//           propsForDots: {
//             r: "6",
//             strokeWidth: "2",
//             stroke: "#0000FF",
//           },
//         }}
//         bezier
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       />

//       <Text style={{ textAlign: 'center', fontSize: 16 }}>Déchets générés (kg)</Text>
//       <LineChart
//         data={{
//           labels: ["Janv", "Fév", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Sept", "Oct", "Nov", "Déc"],
//           datasets: [
//             {
//               data: wasteData,
//               color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Couleur pour les déchets
//               strokeWidth: 2,
//             }
//           ]
//         }}
//         width={Dimensions.get("window").width }
//         height={220}
//         yAxisLabel="kg"
//         yAxisSuffix=""
//         yAxisInterval={1}
//         chartConfig={{
//           backgroundColor: "#1E1E1E",
//           backgroundGradientFrom: "#4B4B4B",
//           backgroundGradientTo: "#1E1E1E",
//           decimalPlaces: 2,
//           color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//           propsForDots: {
//             r: "6",
//             strokeWidth: "2",
//             stroke: "#FF0000",
//           },
//         }}
//         bezier
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       />
//     </View>
//   );
// };

// export default MyChart;


import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { styles } from './MychartStyles'; // assurez-vous d'avoir un fichier de style

const MyChart = () => {
  return (
    
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Consommation d'Eau</Text>
        <LineChart
          data={{
            labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
            datasets: [{ data: [20, 45, 28, 80, 99, 43] }]
          }}
          width={Dimensions.get("window").width - 32}
          height={220}
          yAxisSuffix="L"
          chartConfig={{
            backgroundColor: "#blue",
            color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
            style: { borderRadius: 16 }
          }}
          style={styles.chartStyle}
        />
      </View>
      
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Consommation d'Électricité</Text>
        <LineChart
          data={{
            labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin"],
            datasets: [{ data: [30, 55, 60, 70, 40, 90] }]
          }}
          width={Dimensions.get("window").width - 32}
          height={220}
          yAxisSuffix='kWh'
          chartConfig={{
            backgroundColor: "#green",
            color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
            style: { borderRadius: 16 }
          }}
          style={styles.chartStyle}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Déchets générés</Text>
        <ScrollView horizontal>
        <LineChart
          data={{
            labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juillet", "Août", "Sept", "Oct", "Nov", "Déc"],
            datasets: [{ data: [15, 80, 35, 60, 75, 50, 10, 15, 20, 30, 11, 5] }]
          }}
          width={Dimensions.get("window").width + 100}
          height={300}
          yAxisSuffix='kg'
          
          chartConfig={{
            backgroundColor: "#red",
            color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
            style: { borderRadius: 16}
          }}
          style={styles.chartStyle}
        />
        </ScrollView>
      </View>
    </ScrollView>
    
  );
};

export default MyChart;
