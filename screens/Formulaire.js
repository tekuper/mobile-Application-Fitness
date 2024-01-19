import { StyleSheet, Text, Dimensions,FlatList,Switch, View, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Picker } from "@react-native-picker/picker";
import { CheckBox } from 'react-native-elements';

import LottieView from 'lottie-react-native';
import animdata from '../assets/anim.json';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Form = (props) => {
  const saveFormData = async () => {
    try {
      const response = await fetch(`http://your-express-api/form/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          selectedHeight,
          selectedWeight,
          selectedGender,
          weightGoal,
          selectedPeriod,
          selectedAllergies,
          reminderPreference,
        }),
      });
  
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };
  
  // Make sure to call saveFormData where needed, for example, when the user submits the form.
  
  const navigation = useNavigation();
  const [weightGoal, setWeightGoal] = useState(null);
  const handleWeightGoalChange = (goal) => {
    setWeightGoal(goal);
  };
  const [selectedPeriod, setSelectedPeriod] = useState('twoWeeks');

const handlePeriodChange = (period) => {
  setSelectedPeriod(period);
};

const reminderOptions = [
  { label: 'Yes', value: 'yes' },
  { label: 'No', value: 'no' },
];



    const [selectedAllergies, setSelectedAllergies] = useState([]); 

    const handleAllergyChange = (allergy) => {
        // Check if the allergy is already selected and toggle its state
        const updatedAllergies = selectedAllergies.includes(allergy)
          ? selectedAllergies.filter((item) => item !== allergy)
          : [...selectedAllergies, allergy];
    
        setSelectedAllergies(updatedAllergies);
      };

    
      const allergiesData = [
        { label: 'Dairy', value: 'dairy' },
        { label: 'Nuts', value: 'nuts' },
        { label: 'Shellfish', value: 'shellfish' },
        /*{label: 'Strawberry',value:'strawberry'},*/
        {label: 'Peanuts',value:'Peanuts'},

      ];
      const handleValidation = () => {
        // Ajoutez ici votre logique de validation
        console.log('Bouton de validation appuyé');
      };

  const [selectedHeight, setSelectedHeight] = useState('160');
  const heightItems = Array.from({ length: 201 }, (_, i) => (i + 100).toString());

  const [selectedWeight, setSelectedWeight] = useState('70');
  const weightItems = Array.from({ length: 151 }, (_, i) => (i + 40).toString());

  const [selectedGender, setSelectedGender] = useState('male');

  const onGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const handleGenderChange = (itemValue) => {
    setSelectedGender(itemValue);
    onGenderChange(itemValue);
  };
  const [reminderPreference, setReminderPreference] = useState('no');

  const handleReminderChange = (value) => {
    setReminderPreference(value);
  };
  
  const periodOptions = [
    { label: '2 Weeks', value: 'twoWeeks' },
    { label: '1 Month', value: 'oneMonth' },
    { label: '2 Months', value: 'twoMonths' },
    { label: '3 Months', value: 'threeMonths' },
    { label: ' + 3 Months', value: '+threeMonths' },


  ];
  

  const calculateIdealWeight = () => {
    const heightInCentimeters = parseInt(selectedHeight);
    let idealWeight = 0;

    if (selectedGender === 'male') {
      // Devine formula for males
      idealWeight = 50 + 2.3 * (heightInCentimeters - 152.4);
    } else if (selectedGender === 'female') {
      // Devine formula for females
      idealWeight = 45.5 + 2.3 * (heightInCentimeters - 152.4);
    }
    

    return `Your ideal weight is approximately ${idealWeight.toFixed(1)} kg`;
  };
  const [profileData, setProfileData] = useState(null);
  const handleValidation1 = () => {
    const data = {
      selectedHeight,
      selectedWeight,
      selectedGender,
      weightGoal,
      selectedPeriod,
      selectedAllergies,
      reminderPreference,
    };

    const handleValidation1 = () => {
  const data = {
    selectedHeight,
    selectedWeight,
    selectedGender,
    weightGoal,
    selectedPeriod,
    selectedAllergies,
    reminderPreference,
  };

  setProfileData(data);
  Alert.alert(
    'Success',
    'We have saved your information.',
    [
      {
        text: 'OK',
        onPress: () => {
          // Pass data to DietCategoriesScreen on successful submission
          navigation.navigate('DietCategories', { allergies: selectedAllergies });
        },
      },
    ],
  );
};

    setProfileData(data);
    Alert.alert(
      'Success',
      'We have saved your information.',
      [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to the profile page after successful submission
            navigation.navigate('Profile', { profileData: data });
          },
        },
      ],
    
    );
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
      
      <LottieView
        source={animdata}
        autoPlay
        loop
        style={{ alignContent:'flex-start',height:120,marginHorizontal:40 }}
      />
      </View>
      <FlatList
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      data={[{ key: '1' }]} // You need to provide some data to FlatList
      horizontal ="True"// Set horizontal to true for horizontal scrolling
      renderItem={({ item }) => (
   
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Select your Height : </Text>
        <View style={{ alignItems: 'center' }}>
          <View style={{ height: 15 }}></View>
          <Picker
            style={{ height: 40, width: 200, backgroundColor: '#A9EAFE', alignContent: 'center' }}
            selectedValue={selectedHeight}
            onValueChange={(itemValue, itemIndex) => setSelectedHeight(itemValue)}>
            {heightItems.map((item) => (
              <Picker.Item key={item} label={`${item} cm`} value={item} />
            ))}
          </Picker>
          <View style={{ height: 20 }}></View>
        </View>

        <Text style={styles.text_footer}>Select your Weight : </Text>

        <View style={{ height: 15 }}></View>
        <View style={{ alignItems: 'center' }}>
          <Picker
            style={{ height: 40, width: 200, backgroundColor: '#A9EAFE', alignContent: 'center' }}
            selectedValue={selectedWeight}
            onValueChange={(itemValue, itemIndex) => setSelectedWeight(itemValue)}>
            {weightItems.map((item) => (
              <Picker.Item key={item} label={`${item} kg`} value={item} />
            ))}
          </Picker>
          <View style={{ height: 20 }}></View>
          <View>
            <Text style={styles.text_footer}>Select your gender :</Text>
            <View style={{ height: 20 }}></View>
            <Picker
              selectedValue={selectedGender}
              onValueChange={handleGenderChange}
              style={{ height: 40, width: 150, backgroundColor: '#A9EAFE', alignContent: 'center' }}
            >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>
          <View style={{ height: 20 }}></View>
          <Text>{calculateIdealWeight()}</Text>
          <View style={{ height: 20 }}></View>
          <View>
  <Text style={styles.text_footer}>Select your weight goal:</Text>
  <View style={{ height: 20 }}></View>
  <CheckBox
    title="Gain Weight"
    checked={weightGoal === 'gain'}
    onPress={() => handleWeightGoalChange('gain')}
  />
  <CheckBox
    title="Lose Weight"
    checked={weightGoal === 'lose'}
    onPress={() => handleWeightGoalChange('lose')}
  />
  <View>
  <View style={{ height: 20 }}></View>
  <Text style={styles.text_footer}>Select the wanted period:</Text>
  <View style={{ height: 20 }}></View>
  <Picker
    selectedValue={selectedPeriod}
    onValueChange={(itemValue, itemIndex) => handlePeriodChange(itemValue)}
    style={{ height: 40, width: 200, backgroundColor: '#A9EAFE', alignContent: 'center' }}
  >
    {periodOptions.map((option) => (
      <Picker.Item key={option.value} label={option.label} value={option.value} />
    ))}
  </Picker>
</View>

</View>
 <View style={{ height: 20 }}></View>
          <Text style={styles.text_footer}>Select your food allergies : </Text>
          <View style={{ height: 20 }}></View>
          <FlatList
          data={allergiesData}
          keyExtractor={(item) => item.value}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Switch
                value={selectedAllergies.includes(item.value)}
                onValueChange={() => handleAllergyChange(item.value)}
              />
              <Text>{item.label}</Text>
              
            
            </View>
          )}
        />
        <View>
        <View style={{ height: 20 }}></View>
  <Text style={styles.text_footer}>Do you want a daily remainder ?</Text>
  <View style={{ height: 20 }}></View>

  <Picker
    selectedValue={reminderPreference}
    onValueChange={(itemValue, itemIndex) => handleReminderChange(itemValue)}
    style={{ marginStart:50, height: 30, width: 120, backgroundColor: '#A9EAFE', alignContent: 'center'}}
  >
    {reminderOptions.map((option) => (
      <Picker.Item key={option.value} label={option.label} value={option.value} />
    ))}
  </Picker>

</View>

         <View style={{ height: 25 }}></View>
         <Button title="Submit" onPress={handleValidation1} color="#87CEEF" />
          
        </View>  
        </View>
        )}
    />
 
    </View>
  
  );
};
 // on doit comme   
const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
  },
  header: {
    flex: 0.25,
    justifyContent: 'flex-end',
   
    marginRight: 20,
  },
  footer: {
    flex: 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 40,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize:30,
    
  },
  text_footer: {
    color: "black",
    fontSize: 17,
    fontWeight: 'bold',
  },
  icon: {
    marginTop: 10,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  input: {
    height: 50,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  scrollContent: {
    flexGrow: 4,
  },

});

export default Form;


  