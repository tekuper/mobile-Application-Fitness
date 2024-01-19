import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import DietCategoriesScreen from './DietCategoriesScreen';
import VeganDietScreen from './VeganDietScreen';
import KetoDietScreen from './KetoDietScreen';
import PaleoDietScreen from './PaleoDietScreen';
import DetoxDietScreen from './DetoxDietScreen';


const NutritionScreen = ({ navigation }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); 
  

  const handleMealPress = (meal) => {
    if (showCategory) {
      // If showCategory is true, navigate to "RecetteDetails"
      navigation.navigate('RecetteDetails', {
        meal: meal,
      });
    } else {
      // If showCategory is false, set it to true
      setShowCategory(true);
    }
  };

  
  return (
    <View style={{ flex: 1, backgroundColor: '#87CEFA' }}>
      <View style={styles.header}>
        <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
          Eat Healthy Live Healthy !
        </Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.footer}>
          <DietCategoriesScreen
            handleCategoryPress={(category) => {
              setSelectedCategory(category);
              setShowCategory(true);
            }}
          />
  
          {showCategory && selectedCategory === 'Vegan' && (
            <VeganDietScreen navigation={navigation} />
          )}
          {showCategory && selectedCategory === 'Keto' && (
            <KetoDietScreen navigation={navigation} />
          )}
          {showCategory && selectedCategory === 'Paleo' && (
            <PaleoDietScreen navigation={navigation} />
          )}
          
          {showCategory && selectedCategory === 'Detox' && (
            <DetoxDietScreen navigation={navigation} />
          )}
          
        </View>
      </ScrollView>
    </View>
  );
          };
          const styles = StyleSheet.create({
            
            header: {
              
              height:80,
              
              justifyContent:'flex-end',
              marginRight:10,
              marginBottom:20,
            },
            
            footer:{
              flex:5,
              backgroundColor:'#FFF',
              borderTopLeftRadius:30,
              borderTopRightRadius:30,
              paddingVertical:10,
              paddingHorizontal:20,
            }
          });
          
          export default NutritionScreen;  