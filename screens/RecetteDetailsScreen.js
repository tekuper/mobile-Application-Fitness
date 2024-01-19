import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const RecetteDetailsScreen = ({ route }) => {
  const { meal } = route.params;
  

  if (!meal) {
    return (
      <View style={styles.container}>
        <Text>Error: Meal details not available</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: meal.imageUri }} />
        <Text style={styles.imagetitle}>{meal.Imagetitle}</Text> 
        <View style={styles.detailsContainer}>
          <Text style={styles.subtitle}>Nutritional Values:</Text>
          {meal.nutritionalValues && meal.nutritionalValues.map((value, index) => (
            <Text key={index} style={styles.text}>{value}</Text>
          ))}

          <Text style={styles.subtitle}>Ingredients:</Text>
          {meal.ingredients && meal.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.text}>{ingredient}</Text>
          ))}

          <Text style={styles.subtitle}>Recipe:</Text>
          {meal.recette && meal.recette.map((step, index) => (
            <Text key={index} style={styles.text}>{step}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  imagetitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailsContainer: {
    padding: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  text: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default RecetteDetailsScreen;
