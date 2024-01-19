import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FitnessItems } from '../Context';

const Today = () => {
  const navigation = useNavigation();

  const navigateToExercise = () => {
    navigation.navigate('Home');
  };

  const navigateToForm = () => {
    navigation.navigate('Formulaire');

  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      alignItems: 'center',
    },
    titleBox: {
      backgroundColor: '#87BAFA',
      borderRadius: 10,
      width: '85%',
      height: 40,
      justifyContent: 'center',
    },
    title: {
      color: 'rgba(255,255,255,1)',
      fontSize: 22,
      alignSelf: 'center',
    },
    buttonBox: {
      flexDirection: 'row',
      width: '75%',
      justifyContent: 'center',
    },
    buttonShape: {
      backgroundColor: 'rgba(178,108,233,1)',
      borderRadius: 10,
      width: '50%',
      height: 40,
      margin: 15,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonText: {
      color: 'rgba(255,255,255,1)',
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: 5,
    },
    progress: {
      width: '95%',
      height: 125,
      marginTop: 15,
      alignItems: 'center',
    },
    progressContainer: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 20,
      justifyContent: 'center',
    },
    progressBox: {
      backgroundColor: 'rgba(213,218,223,1)',
      width: '40%',
      height: 55,
      borderRadius: 10,
      marginHorizontal: 25,
    },
    progressTitle: {
      color: '#121212',
      alignSelf: 'center',
      marginVertical: 4,
    },
    progressValue: {
      color: '#121212',
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    exerciseContainer: {
      width: '95%',
      height: 300,
      margin: 55,
      alignItems: 'center',
    },
    box: {
      backgroundColor: 'rgba(213,218,223,1)',
      borderRadius: 10,
      width: '75%',
      height: 200,
      marginTop: 15,
      alignSelf: 'center',
    },

  })
  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    setWorkout,
    workout,
  } = useContext(FitnessItems);
  return (

    <ScrollView style={{ marginTop: 50, }}>
      <View style={styles.container}>
        <View style={styles.progress}>
          <View style={styles.titleBox}>
            <Text style={styles.title}>Today's Progress! 🏃</Text>
          </View>
          <View style={styles.progressContainer}>
            <View style={styles.progressBox}>
              <Text style={styles.progressTitle}>Current Goal</Text>
              <Text style={styles.progressValue}>120 min</Text>
            </View>
            <View style={styles.progressBox}>
              <Text style={styles.progressTitle}>Current Total</Text>
              <Text style={styles.progressValue}>90 min</Text>
            </View>
          </View>
        </View>

        <View style={styles.exerciseContainer}>
          <View style={[styles.titleBox, { backgroundColor: 'rgba(178,108,233,1)', marginVertical: 10 }]}>
            <Text style={styles.title}>Today's Activity 🏋️</Text>
          </View>


          {/* Placeholder content for exercises */}

          <ScrollView horizontal={false} style={styles.box}>


            <View
              style={styles.container}>
              <Text
                style={{
                  color: "Black",
                  fontWeight: 'bold',
                  fontSize: 17,
                  marginTop: 6,
                }}>
                WORKOUTS</Text>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "Black",
                  fontSize: 18,
                }}>
                {workout}
              </Text>

              <Text
                style={{
                  color: "Black",
                  fontWeight: 'bold',
                  fontSize: 17,
                  marginTop: 6,
                }}>
                KCAL</Text>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "Black",
                  fontSize: 18,
                }}>
                {calories}
              </Text>



              <Text
                style={{
                  color: "Black",
                  fontWeight: 'bold',
                  fontSize: 17,
                  marginTop: 6,
                }}>
                MINS</Text>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "blod",
                  color: "Black",
                  fontSize: 18,
                }}>
                {minutes}</Text>

            </View>
          </ScrollView>

        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity onPress={navigateToExercise} style={[styles.buttonShape, { marginHorizontal: 10 }]}>
            <MaterialIcons name="fitness-center" size={24} color="white" />
            <Text style={styles.buttonText}>Add Exercise</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToForm} style={[styles.buttonShape, { backgroundColor: 'rgba(178,108,233,1)', marginHorizontal: 10 }]}>

            <Text style={styles.buttonText}>Go To Form</Text>
          </TouchableOpacity>
        </View>


        <TouchableOpacity
          onPress={() =>
            navigation.navigate('NutritionScreen')
          }
          style={[styles.buttonShape, { backgroundColor: 'rgba(178,108,233,1)' }]}
        >
          <Text style={styles.buttonText}>Go To Diet</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('login')} style={[styles.buttonShape, { backgroundColor: '#87BAFA' }]}>
          <MaterialIcons name="exit-to-app" size={24} color="white" />
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView >






  )
};



export default Today;
