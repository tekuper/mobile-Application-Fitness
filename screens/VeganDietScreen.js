
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';




const VeganDietScreen = ({ navigation }) => {
  const [showCategory, setShowCategory] = useState(false);
  
 
  
  const mealPlans = [
    {
      id: '1',
      day: 'Monday',
      meals: [
        {
          id: '1',
          title: 'Breakfast',
          time: '8:00AM - 08:30AM',
          
      Imagetitle:'Bread with Cereals, Margarine, Jam, Coffee ',
      imageUri: 'https://static.750g.com/images/622-auto/7b72fdf775b5e0fb90c4778984646083/adobestock-102019174.jpeg',
      nutritionalValues: ['Calories: 400 Kcal', 'Protein: 11g', 'carbohydrate: 65g ', 'Fat: 12g'],
      ingredients:['1 Coffe ','200g Bread with Cereals', '40g margarine','4 tablespoons jam'],
      recette:['1. Prepare hot drink. Put margarine and jam on bread',
               ' 2. Enjoy!'
               ]
              
    },
        {
          id: '2',
          title: 'Lunch',
          time: '12:00 AM',
          Imagetitle:'Mujadarra lentil rice (Lebanese recipe)',
          nutritionalValues: ['Calories: 400 Kcal', 'Protein: 15g', 'Gcarbohydrate: 70g ', 'Fat: 10g'],
      imageUri: 'https://www.adeline-cuisine.fr/wp-content/uploads/2020/03/Riz-aux-lentilles-aux-epices-recettes-facile-1024x768.jpg',
      ingredients:['120 to 150g rice', '100g green lentils', '1 tbsp cumin', ' 1 tbsp turmeric', 'Olive oil',
                   ' 1 clove garlic' , 'parsley ', 'onions ' , 'salt and pepper', ' 20-30cl water' ],
      recette:[' 1. Cook the lentils in plenty of boiling water. Green lentils take about 20 minutes to cook ',
               ' 2. Meanwhile, cook the spiced rice. Put olive oil in a saucepan and brown the rice. Add the spices and stir until all the rice grains are coated. Season with salt and pepper ',
               '3 Pour the hot water into the saucepan, cover and cook the rice over medium heat for around 10 minutes. Check from time to time that there is enough water to prevent the rice from sticking. ',
               ' 4. Once the rice has finished cooking, turn off the heat and leave to rest for a few more minutes. Fluff the rice with a fork, add the lentils and adjust the seasoning ',
               '5. Peel and finely chop the garlic. You can use a garlic press. Add to the yoghurt with a little salt, pepper and a few parsley leaves ',
               '6. Arrange the rice on a plate, add the yoghurt sauce on top and sprinkle with parsley and onions ']
              

    },
        {
          id: '3',
          title: 'Dinner',
          time: '17:30 AM - 18:00 AM',
          Imagetitle: 'Chicken noodle wok with cashew nuts',
          imageUri: 'https://www.bettybossi.ch/rdbimg/bb_asia100801_0040a/bb_asia100801_0040a_r02_v003_x0010.jpg',
          nutritionalValues:['Energie: 170kcal', 'Protein: 31g', 'carbohydrate: 0g', 'Fat: 2g'],
          ingredients:['200g whole-wheat noodles', '1 red bell pepper','1 zucchini',' 1 broccoli, cut into small florets','1/2 cup cashew nuts','3 tablespoons soy sauce','1 tablespoon sesame oil','2 tablespoons rice vinegar'],
          recette:['1.Cook noodles according to package instructions. Drain and set aside.',
                   '2. Heat the sesame oil in a large frying pan over medium heat. Add the vegetables (bell bell pepper, zucchini, broccoli) and stir-fry until tender-crisp. ',
                   '3. Add the cooked noodles, soy sauce, cashews and rice vinegar. Mix well to coat the noodles and vegetables with the sauce.',
                   '4. Continue stir-frying for a few minutes until everything is well mixed and hot.',
                   '5. Serve the mushroom soup and vegetable noodles in separate bowls. Garnish with chopped spring onions, fresh coriander or sesame seeds. Enjoy your meal!'
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
          
          Imagetitle:'Fruit yogurt with oat flakes ',
          imageUri: 'https://i.pinimg.com/564x/20/9d/43/209d43cd7b59ec22174da8cf2ce21102.jpg',
          nutritionalValues: ['Energie: 400 Kcal', 'Protein: 13g', 'Fat: 35g '],
          ingredients:['1 plain yoghurt', '1 tbsp oat flakes', '150g red fruit', '1 banana', 'blueberries', 'almonds'],
          recette:[' 1. rinse and blot blueberries ',
                   ' 2. Mix the yoghurt with the red fruit and slice the banana' ,
                   ' 3. Pour the mixture into a bowl and divide between the banana slices, almonds, blueberries and oatmeal' ]
          
        },
        {
          id: '2',
          title: 'Lunch',
          time: '12:00 AM',
          Imagetitle: 'Rice ',
      imageUri:'https://images.squarespace-cdn.com/content/v1/5da5d4c6a55f1d38ae0169e0/1605264684465-8ZMLQ9ES7290EFCJ957O/Riz+cantonais+positive+healthy+foods.jpg',
      nutritionalValues:['Energie: 145 Kcal', 'Protein: 3g', 'carbohydrate: 32g ', 'Fat: 0,5g'],
      ingredients:['350g de rice',  '1 box of corn',  '4 tsp olive oil', '800ml water with a pinch of salt','Fresh parsley'],
      recette:['1. Wash the rice, soak in water for 15 minutes and drain for 15 minutes',
               '2. Heat 2 tablespoons of oil in a saucepan over medium heat, add the rice and stir until the rice begins to glaze. Add the boiling salted water, put the lid on the pan and simmer for 15 to 20 minutes on low heat ',
               '3. Remove the lid from the pan, allow the steam to evaporate and, using a fork, place 2 teaspoons of oil and fresh herbs under the rice']
      
    },
        {
          id: '3',
          title: 'Dinner',
          time: '17:30 AM - 18:00 AM',
          Imagetitle: 'lentil soup with spices  ',
      imageUri: 'https://club.cooking/wp-content/uploads/2019/07/lenti-prev.jpg',
      nutritionalValues:['Energie: 200kcal', 'Protein: 24g', 'carbohydrate: 0g'],
      ingredients:['2 onions', ' 3 garlic cloves', '3 m curry powder','15 ml olive oil','2-3 carrots','1.25 liters chicken broth','200 ml lentils','salt and pepper'],
      recette:['1. Wash onions and carrots in vinegar and water. Rinse well with clean water.',
               '2. Peel and finely dice the carrots, peel and slice the onions and finely chop the garlic. ',
              '3. Put the olive oil in a saucepan, add the onions, garlic and curry powder, and over medium heat leave to sweat, stirring occasionally. Add the carrots and leave to brown for three minutes.',
              '4. While the carrots are browning, rinse the lentils, pour into the pot . Bring to the boil and simmer for 10 minutes. Adjust the seasoning if necessary, as the stock is already salty.'] 
  
  
    },
      ],
    },
    {
      id: '3',
      day: 'Wednesday',
      meals: [
        {
          id: '1',
          title: 'Breakfast',
          time: '8:00AM - 08:30AM',
          
          Imagetitle: 'Muesli with chia seeds and hazelnut milk',
          imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOR2IYl0N6RvYN3oN2XhHODj2NEeEZrSOmSNj1wli7pP1rZjAE4OrG-UtdcM2Z-JrzxbM&usqp=CAU',
          nutritionalValues:['Energy: 200 Kcal', 'Protein: 6g', 'carbohydrate: 30g' , 'Fat: 8g' ],
          ingredients:['1 tsp. chia seeds', '15 cL hazelnut milk','1-2 fruits', '3 tbsp. mixed nuts','30 g oat flakes','10 g soy flakes','1 tsp. honey'],
          recette:[' 1. The day before, rehydrate the chia seeds in 5 cL hazelnut milk.',
                   ' 2. The following day, peel the fruit and cut into quarters; peel the pomelo and then cut into segments, removing all membranes. ',
                   ' 3. Coarsely chop the walnuts.',
                   '4. Pour oat and soy flakes into a bowl; add fresh fruit, nuts and chia seeds. Add hazelnut milk according to desired consistency. Add agave syrup and enjoy.'
                  ]
          
        },
        {
          id: '2',
          title: 'Lunch',
          time: '12:00 AM',
          Imagetitle:'Sandwich with eggplant caviar ',
      imageUri: 'https://cdn.pratico-pratiques.com/app/uploads/sites/4/2018/08/30190954/sandwich-au-caviar-aubergine-feta-marinee-roquette.jpeg',
      nutritionalValues:['Energy: 400kcal', 'Protein: 20g', 'carbohydrate: 50g', 'Fat: 20g'],
      ingredients:['2 eggplants, halved lengthwise', '125 ml olive oil', 'salt and pepper', '2.5 ml (1/2 tsp.) cumin', '1 lemon (juice)', '1 bunch basil, chopped', '250 ml olive oil','2 garlic cloves, chopped','bread','10 cherry tomatoes, halved','a few arugula leaves'],
      recette:['1. In a small bowl, mix the crumbled feta with the olive oil and balsamic vinegar. Season with salt and pepper. Leave to marinate for at least 15-20 minutes to allow the flavours to blend.',
               '2. Cut the bread in half lengthwise, spread the eggplant caviar generously over the bottom half of the bread, arrange the marinated feta cheese on top of the eggplant caviar, add a layer of arugula and close the sandwich with the upper part of the bread ',
               '3. Cut the sandwich into individual portions as desired. Serve immediately and enjoy! ']
                
    },
        {
          id: '3',
          title: 'Dinner',
          time: '17:30 AM - 18:00 AM',
          Imagetitle: 'Vegetable-Grilled Pizza',
      imageUri:'https://images.smuckers.ca/images/recipes/29/fr/pizza-vegetalienne-aux-legumes-grilles_desktop.jpg',
      nutritionalValues:['Energy: 350kcal', 'Protein: 15g', 'carbohydrate: 45g', 'Fat: 15g'],
      ingredients:['250 ml hot water', '5 ml active dry yeast', '500 ml pizza flour ', '5 ml salt', '15 ml cornmeal','50 ml pizza sauce ','grilled vegetables (peppers, mushrooms, eggplant, onions, zucchini)','mozzarella','slices of hot peppers'],
      recette:['1. Dissolve yeast and sugar in warm water. Leave to stand for 5-10 minutes until foamy.',
               '2. In a large bowl, combine flour, olive oil and salt. Add yeast mixture and mix well.',
               '3. In a saucepan, combine tomato purée, garlic, oregano, basil, salt and pepper. Simmer over low heat for approx. 15-20 minutes.',
               '4. Preheat oven to 200°C. Meanwhile, in a bowl, toss chopped vegetables with olive oil, salt and pepper. Spread vegetables on a baking sheet and roast in the oven for about 15-20 minutes, or until tender.',
               '5. Roll out the pizza dough on a baking sheet, then spread the tomato sauce over the dough, add the grilled vegetables and sprinkle with grated vegan cheese.',
               '6. Bake in preheated oven for about 15-20 minutes or until crust is golden and crisp',
               '7. Remove from oven, allow to cool for a few minutes, then cut up and serve.'
               ]
      
    },
      ],
    },
    
  ];
  
  
  const handleMealPress = (meal) => {
    console.log('Meal Pressed:', meal);
  
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
    <View style={{ flex: 1}}>
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

 

export default VeganDietScreen;
