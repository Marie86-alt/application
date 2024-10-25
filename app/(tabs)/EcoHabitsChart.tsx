import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  // VictoryPie,
  // VictoryLabel,
  // Circle,
  // VictoryLegend,
  VictoryTooltip,
} from "victory-native";

import { Svg } from "react-native-svg";
import { View, StyleSheet, Text } from 'react-native'; // Assurez-vous d'utiliser Text et non H4



const barChartData = [
  { Month: 'Jan', y: 5000 },
  { Month: 'Feb', y: 10000 },
  { Month: 'Mar', y: 15000 },
  { Month: 'Apr', y: 20000 },
]; // Exemple de données

const months = ['Jan', 'Feb', 'Mar', 'Apr']; // Liste des mois

export default function BarChart() {
  return (
    <View style={[styles.barchart, styles.shadowProp]}>
      <Text style={styles.title}>Last Months Income</Text> 
      {/* Utilisation de Text pour remplacer H4 */}
      <VictoryChart
      
        theme={VictoryTheme.material}
        domainPadding={{ x: 20, y: 50 }} // padding pour l'axe horizontal et vertical
        alignment='middle'
      >
        <VictoryAxis tickValues={[0, 1, 2, 3]} tickFormat={months} />
        <VictoryAxis
          dependentAxis
          tickFormat={(x: number) => `Rs.${x / 1000}k`} // Affiche les valeurs avec Rs. xxk
        />
        <VictoryBar
          data={barChartData}
          labels={({ datum }: { datum: { y: number } }) => `Rs.${datum.y / 1000}k`} // Labels formatés
          cornerRadius={{ topLeft: 8 }} // Bord arrondi des barres
          alignment='start'
          x='Month'
          barWidth={18} // Largeur des barres
          style={{ data: { fill: '#4CAF50' } }} // Couleur de remplissage
          animate={{ duration: 500 }} // Animation avec une durée de 500ms
          labelComponent={<VictoryTooltip />} // Ajout des tooltips
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  barchart: {
    padding: 20,
    backgroundColor: '#fff',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

{/* <View style={[styles.barchart, styles.shadowProp]}>
<H4>Last Months Income </H4>
<VictoryChart
  theme={VictoryTheme.material}
  domainPadding={{ x: 20, y: 50 }}//padding for your chart horizontal and vertical
  alignment='middle'
>
  <VictoryAxis tickValues={[0, 1, 2, 3]} tickFormat={months} />
  <VictoryAxis
    dependentAxis
    //tickFormat specifies how ticks should be displayed
    tickFormat={(x) => `Rs.${x / 1000}k`}
  />
  <VictoryBar
    data={barChartData}
    labels={({ datum }) => `Rs.${datum.y / 1000}k`}
    cornerRadius={{ topLeft: 8 }}
    alignment='start'
    x='Month'
    barWidth={18}
    style={{ data: { fill: Theme.primary } }}
    animate
  />
</View>

const styles = StyleSheet.create({
  barchart: {
    // Add your styles here
  },
  shadowProp: {
    // Add your styles here
  },
});ryChart>
</View> */}