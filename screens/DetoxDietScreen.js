import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const DetoxDietScreen = ({ navigation }) => {
  const [showCategory, setShowCategory] = useState(false);
  const mealPlans = [
    {
      id: '1',
      day: 'Monday',
      meals: [
        {
          id: '1',
          title: 'Petit Déjeuner',
          time: '8:00AM - 08:30AM',
          
      Imagetitle:'Pudding de Chia ',
      imageUri: 'https://www.planetevegan.com/wp-content/uploads/2023/06/recette-pudding-de-chia.jpg',
      nutritionalValues: ['Energie: 150 Kcal', 'Protein: 7g', 'carbohydrate: 7g ','Fat:7g'],
      ingredients:['400 ml vegetable milk','60 g chia seeds', '30 g syrup','fresh fruit'],
      recette:[' 1. Pour the plant milk and agave syrup into the measuring glass and stir.',
               ' 2. Add the chia seeds and mix for 20 seconds with a fork.',
               ' 3. Leave to stand for a few minutes and stir again. Repeat once or twice, until the seeds are swollen and evenly distributed in the liquid, without remaining on the surface or at the bottom.',
               ' 4. Pour the mixture into the ramekins and chill for at least 2 hours, or even overnight. ',
               '5. Enjoy as is, or add fruit, jam, cereals...' ]
      
    },
        {
          id: '2',
          title: 'Lunch',
          time: '12:00 AM',
          Imagetitle:'Chicken nuggets',
      imageUri: 'https://odelices.ouest-france.fr/images/recettes/nuggets_de_poulet.jpg.webp',
      nutritionalValues:['Energy: 250 Kcal', 'Protein: 15g', 'carbohydrate: 15g ', 'Fat: 20g '],
      ingredients:['300 g chicken breast', '1 egg', 'breadcrumbs (30 g with meat, approx. 30 g for breading)',  ' Salt and pepper'],
      recette:['1. Chop the meat tartare-style with a knife.',
              ' 2. Add the egg and season. Mix in the breadcrumbs by hand to thicken the texture of the filling. ',
              ' 3. Shape the nuggets between your hands. If you make them flat, they"ll cook faster.',
              ' 4. Roll them in the breadcrumbs; they should be completely covered.',
              ' 5. Heat a little oil in a frying pan and sear the nuggets.',
               '6. Bake for 5 min on each side, until you have a nice golden crust. ']
      
          
    },
        {
          id: '3',
          title: 'Dinner',
          time: '17:30 AM - 18:00 AM',
          Imagetitle: 'Detox carrot and turmeric soup',
          imageUri: 'https://media.hachette.fr/fit-in/750x488/5/2022-07/soupe-detox-carotte-et-curcuma.png',
          nutritionalValues:['Energy: 120kcal', 'Protein: 4g', 'carbohydrate: 20g', 'Fat: 5g'],
          ingredients:['750 g carrots', '1 liter vegetable stock',' 5 cm ginger',' 1 tsp. turmeric powder','1 drizzle olive oil','3 sprigs parsley'],
          recette:['1. Peel carrots and slice thinly. Peel and finely grate ginger.',
                   '2. In a large saucepan, heat a drizzle of olive oil over low heat. Add turmeric, 2 tablespoons grated ginger and carrots. Sauté for 5 minutes. Pour in the stock and boil for around 25 minutes.',
                    '3. Blend with just under half the stock and adjust to desired consistency. Season with salt and pepper and sprinkle with rinsed, coarsely chopped parsley.'
                   ]
        },
      ],
    },
    {
      id: '2',
      day: 'Tuesday',
      meals: [
        {
          id: '1',
          title: 'Breakfast',
          time: '8:00AM - 08:30AM',
          
          Imagetitle: 'Detox Smoothie ',
          imageUri:'https://i0.wp.com/sweetlycakes.com/wp-content/uploads/2022/06/smoothiedetox-8.jpg?resize=720%2C1080&ssl=1',
          nutritionalValues:['Energy: 300 Kcal', 'Protein: 5g', 'carbohydrate: 40g ', 'Fat: 5'],
          ingredients:['1 Cucumber',  '2 handfuls spinach',  '1 Lime juice' ],
          recette:['1. Peel and chop the cucumber. Trim and rinse the spinach.',
                   '2. Place the vegetables in the bowl of a blender, add the lemon juice and blend until smooth.',
                   '3. Add more or less water according to desired texture, divide between glasses and serve immediately.']    
    },
        {
          id: '2',
          title: 'Lunch',
          time: '12:00 AM',
          Imagetitle:'Chicken nuggets',
          imageUri: 'https://odelices.ouest-france.fr/images/recettes/nuggets_de_poulet.jpg.webp',
          nutritionalValues:['Energy: 250 Kcal', 'Protein: 15g', 'carbohydrate: 15g ', 'Fat: 20g '],
          ingredients:['300 g chicken breast', '1 egg', 'breadcrumbs (30 g with meat, approx. 30 g for breading)',  ' Salt and pepper'],
          recette:['1. Chop the meat tartare-style with a knife.',
                  ' 2. Add the egg and season. Mix in the breadcrumbs by hand to thicken the texture of the filling. ',
                  ' 3. Shape the nuggets between your hands. If you make them flat, they"ll cook faster.',
                  ' 4. Roll them in the breadcrumbs; they should be completely covered.',
                  ' 5. Heat a little oil in a frying pan and sear the nuggets.',
                   '6. Bake for 5 min on each side, until you have a nice golden crust. ']
      
    },
        {
          id: '3',
          title: 'Dinner',
          time: '17:30 AM - 18:00 AM',
          Imagetitle: 'Taco Bowl ',
      imageUri: 'https://images.eatsmarter.com/sites/default/files/styles/max_size/public/taco-bowl-678835.jpg',
      nutritionalValues:['Energy: 500kcal', 'Protein: 20g', 'carbohydrate: 60g','fat:15g'],
      ingredients:['¼ bunch parsley', ' ½ green pepperoncini', '4 cherry tomatoes','½ avocado', '½ tbsp olive oil','½ tbsp tomato paste', '½ pinch red pepper flakes','Salt and pepper'],
      recette:['1. Wash parsley, shake dry, pluck leaves, chop one half, set aside remaining leaves. Mix sour cream with pepper and salt until smooth and fold in chopped parsley.',
               '2.  Clean and wash the peppers, lettuce, and tomatoes. Cut the peppers diagonally into slices. Remove stalk from lettuce heads and cut into strips. Halve or quarter tomatoes. Rinse lime, rub dry, and cut into quarters. Halve avocado, remove pit, scoop out flesh, and cut into slices. ',
              '3. Heat oil in a frying pan. Fry ground meat in oil over medium heat for 3 minutes. Add tomato paste, chili flakes, cumin, and salt, and fry for another 5 minutes.',
              '4. Meanwhile, drain kidney beans, rinse in a colander and drain. Grate cheddar cheese.',
              '5.  Divide lettuce, tomatoes, avocado, meat, and beans among 4 bowls. Top each bowl with cheddar cheese, sour cream dip, remaining parsley, and hot peppers, and grind pepper on top.'] 
  
  
    },
      ],
    },
    
    
  ];
  const handleMealPress = (meal) => {
    console.log('Meal Pressed:', meal);

    if (showCategory) {
      navigation.navigate('RecetteDetails', {
        meal: meal,
      });
    } else {
      setShowCategory(true);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.footer}>
          {mealPlans.map((day) => (
            <View key={day.id}>
              <Text style={styles.title}>{day.day}</Text>
              <ScrollView horizontal style={styles.container}>
                {/* Breakfast */}
                <TouchableOpacity onPress={() => handleMealPress(day.meals[0])}>
                  <View style={styles.itemContainer}>
                    <Image style={styles.image} source={{ uri: day.meals[0].imageUri }} />
                    <View style={styles.textImage}>
                      <Text style={styles.breakfastText}>{day.meals[0].title}</Text>
                      <Text style={styles.breakfastTime}>{day.meals[0].time}</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                {/* Lunch */}
                <TouchableOpacity onPress={() => handleMealPress(day.meals[1])}>
                  <View style={styles.itemContainer}>
                    <Image style={styles.image} source={{ uri: day.meals[1].imageUri }} />
                    <View style={styles.textImage}>
                      <Text style={styles.breakfastText}>{day.meals[1].title}</Text>
                      <Text style={styles.breakfastTime}>{day.meals[1].time}</Text>
                    </View>
                  </View>
                </TouchableOpacity>

                {/* Dinner */}
                <TouchableOpacity onPress={() => handleMealPress(day.meals[2])}>
                  <View style={styles.itemContainer}>
                    <Image style={styles.image} source={{ uri: day.meals[2].imageUri }} />
                    <View style={styles.textImage}>
                      <Text style={styles.breakfastText}>{day.meals[2].title}</Text>
                      <Text style={styles.breakfastTime}>{day.meals[2].time}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    footer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      flexDirection: 'row',
    },
    itemContainer: {
      margin: 10,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 10,
    },
  
    textImage: {
      position: 'absolute',
      bottom: 0.2,
      left: 5,
      backgroundColor: '#ffffff',
      padding: 10,
      borderRadius: 8,
    },
  
    breakfastText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000000',
    },
    breakfastTime: {
      fontSize: 16,
      
      color: '#000000',
    },
    
    container: {
      flexDirection: 'row',
    },
    itemContainer: {
      margin: 10,
    },
    header: {
      
      height:100,
      
      justifyContent:'flex-end',
      marginRight:10,
      marginBottom:20,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 10,
    },
    Imagetitle: {
      textAlign:'center',
      marginTop: 5,
      
    },
    calories: {
      fontSize: 16,
      textAlign: 'center',
      marginTop: 10,
    },
  
    title: {
      fontSize:24,
      fontWeight:'bold',
      marginTop:20,
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
  
   
  
  export default DetoxDietScreen;