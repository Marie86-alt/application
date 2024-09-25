
// import React, { useState, useEffect } from 'react';
// import { View, Text } from 'react-native';
// import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';
// import axios from 'axios';

// const Chart = ({ data, color, title }) => (
//   <View>
//     <Text>{title}</Text>
//     <VictoryChart theme={VictoryTheme.material} width={350} height={250}>
//       <VictoryLine
//         style={{ data: { stroke: color }, labels: { fontSize: 12 } }}
//         data={data}
//       />
//     </VictoryChart>
//   </View>
// );

// const EcoHabitsChart = () => {
//   const [energyData, setEnergyData] = useState([]);
//   const [waterData, setWaterData] = useState([]);
//   const [wasteData, setWasteData] = useState([]);

//   useEffect(() => {
//     // Exemple pour l'énergie, fais de même pour l'eau et les déchets
//     axios.get('http://your-api/energy').then(response => {
//       setEnergyData(response.data);
//     }).catch(error => {
//       console.error('Erreur lors de la récupération des données énergétiques', error);
//     });

//     // Fetch waterData and wasteData
//   }, []);

//   return (
//     <View>
//       <Text>Tableau de bord des habitudes écologiques</Text>
//       <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
//         <Chart title="Énergie" data={energyData} color="blue" />
//         <Chart title="Eau" data={waterData} color="green" />
//         <Chart title="Déchets" data={wasteData} color="red" />
//       </View>
//     </View>
//   );
// };

// export default EcoHabitsChart;
import React from 'react';
import { VictoryChart, VictoryLine } from 'victory-native';

const EnergyConsumptionChart = () => {
  const data = [
    { x: '2024-01-01', y: 10 },
    { x: '2024-01-02', y: 12 },
    { x: '2024-01-03', y: 15 },
    // ...
  ];

  return (
    <VictoryChart>
      <VictoryLine
        style={{
          data: { stroke: 'blue' },
          labels: { fontSize: 12 },
        }}
        data={data}
        x="x"
        y="y"
      />
    </VictoryChart>
  );
};

export default EnergyConsumptionChart;
