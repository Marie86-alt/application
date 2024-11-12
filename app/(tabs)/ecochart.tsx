


import React,{useEffect} from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { styles } from './MychartStyles'; // assurez-vous d'avoir un fichier de style
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
//import { Dimensions } from 'react-native';

const MyChart = () => {
   // Valeurs d'animation pour l'opacité et l'échelle
   const opacity = useSharedValue(0);
   const scale = useSharedValue(0.5);
 
   // Animation de style
   const animatedStyle = useAnimatedStyle(() => {
     return {
       opacity: opacity.value,
       transform: [{ scale: scale.value }],
     };
   });
 
   // Lancement de l'animation au montage du composant
   useEffect(() => {
     opacity.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.exp) });
     scale.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.exp) });
   }, []);

  return (

    <Animated.View style={[animatedStyle, { marginVertical: 20 }]}>
    
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Consommation d'Eau</Text>
        <ScrollView horizontal>
        <LineChart
          data={{
            labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juillet", "Août", "Sept", "Oct", "Nov", "Déc"],
            datasets: [{ data: [20, 45, 28, 80, 99, 43] }]
          }}
          width={Dimensions.get("window").width + 100}
          height={220}
          yAxisSuffix="L"
          chartConfig={{
            backgroundColor: "#blue",
            color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
            style: { borderRadius: 16 }
          }}
          style={styles.chartStyle}
        />
        </ScrollView>
      </View>
      
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Consommation d'Électricité</Text>
        <ScrollView horizontal>
        <LineChart
          data={{
            labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "juillet", "aout", "sept", "oct", "nov", "dec"],
            datasets: [{ data: [30, 55, 60, 70, 40, 90] }]
          }}
          width={Dimensions.get("window").width + 100}
          height={220}
          yAxisSuffix='kWh'
          chartConfig={{
            backgroundColor: "#green",
            color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
            style: { borderRadius: 16 }
          }}
          style={styles.chartStyle}
        />
        </ScrollView>
        
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
          height={220}
          yAxisSuffix='kg'
          
          chartConfig={{
            backgroundColor: "#red",
            //backgroundGradientFrom: "#f5f5f5",
            backgroundGradientTo: "#e0e0e0",
            color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
            style: { borderRadius: 16}
          }}
          style={styles.chartStyle}
        />
        </ScrollView>
      </View>
    </ScrollView>
    </Animated.View>
    
  );
};

export default MyChart;
