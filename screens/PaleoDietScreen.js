
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';




const PaleoDietScreen = ({ navigation }) => {
    
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
          
      Imagetitle:'Wild Blueberry Beet Smoothie ',
      imageUri: 'https://healmedelicious.com/wp-content/uploads/2022/06/Paleo-Wild-Blueberry-Beet-Smoothie-1-GF-DF-AIP.jpg',
      nutritionalValues: ['Energy: 380 Kcal', 'Protein: 19g', 'carbohydrate: 24g ' ,'Fat: 25g'],
      ingredients:['1 cup roasted beets','1 cup frozen wild blueberries', '1 cup light canned coconut milk','1/2 banana', '1 serving protein powder', '1 tablespoon toasted coconut flakes for garnish'],
      recette:[' 1. Combine all ingredients except coconut flakes in a blender. Blend until smooth. Pour into glass and garnish with toasted coconut flakes',
                ]
      
    },
        {
          id: '2',
          title: 'Lunch',
          time: '12:00 AM',
          Imagetitle:'Tomato and Red Pepper Soup',
      imageUri: 'https://www.insidetherustickitchen.com/wp-content/uploads/2018/08/Roasted-red-pepper-soup-740x-inside-the-rustic-kitchen.jpg',
      nutritionalValues:['Energy: 150 Kcal', 'Protein: 5g', 'carbohydrate: 25g ', 'Fat: 10g'],
      ingredients:['2 tablespoons olive oil', '1 red bell pepper', '2 medium-size carrots', ' 1 medium-size yellow onion', '3 cloves garlic', ' 1 teaspoon dried oregano','1 teaspoon dried basil','1/4 teaspoon crushed red pepper flakes','1 teaspoon sea salt','3 cups low-sodium vegetable broth'],
      recette:['1. Add the olive oil to a large pot oven over medium heat. Add the onions, bell pepper, and carrots, and sauté for 5 minutes. Add the garlic and sauté for 1 minute.',
              ' 2. Add the dried oregano, dried basil, crushed red pepper flakes, and sea salt. Sauté for 1 minute.',
              ' 3. Add the tomatoes and broth. Turn up the heat to medium-high. Once boiling, reduce the heat to low. Cook uncovered for 45 minutes',
              ' 4. Working in batches, ladle the soup into a blender and blend until smooth',
              '5. Pour the desired amount into an insulated thermos and top with fresh basil. It will stay warm in an insulated container for several hours. Store the rest in a reusable container in the fridge for up to five days or freeze it for another time.' ]
          
    },
        {
          id: '3',
          title: 'Dinner',
          time: '17:30 AM - 18:00 AM',
          Imagetitle: ' Grilled chicken blueberry salad  ',
          imageUri: 'https://www.howsweeteats.com/wp-content/uploads/2021/07/grilled-chicken-blueberry-salad-10.jpg',
          nutritionalValues:['Energy: 455kcal', 'Protein: 24g', 'carbohydrate: 36g', 'Fat: 26g'],
          ingredients:['2 boneless skinless chicken breast halves', '1 tablespoon olive oil',' 1 garlic clove',' Salt and pepper','1 cup fresh blueberries'],
          recette:['1. Toss chicken with oil, garlic, salt and pepper; refrigerate, covered, 30 minutes. In a small bowl, whisk together vinaigrette ingredients; refrigerate, covered, until serving',
                   '2. Grill chicken, covered, over medium heat until a thermometer reads 165°, 5-7 minutes per side. Let stand 5 minutes before slicing. ',
                   '3. Place greens on a serving plate; top with chicken, blueberries and mandarin oranges. Whisk vinaigrette again; drizzle over salad. Top with cheese.'
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
          
      Imagetitle: 'Banana Pancake',
      imageUri:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/banana_pancakes_0-8be4928.jpg?resize=768,574',
      nutritionalValues:['Energy: 250 Kcal', 'Protein: 10g', 'carbohydrate: 30g ', 'Fat:10g'],
      ingredients:['2 bananas', '2 eggs','1/2 cup rolled oats', '1/2 teaspoon baking powder', '1/2 teaspoon vanilla extract', 'A pinch of salt', 'Butter or oil for cooking'],
      recette:['1. Peel the ripe bananas and place them in a bowl. Mash the bananas with a fork until mostly smooth.',
               '2. Add the eggs to the mashed bananas and beat them together. If you"re using vanilla extract, add it to the mixture and stir.',
               '3.  In a blender or food processor, blend the rolled oats until they form a fine powder. Add the blended oats, baking powder, and a pinch of salt to the banana and egg mixture. Stir until well combined.',
               '4. Allow the batter to rest for a few minutes. This gives the oats time to absorb some of the liquid and helps the pancakes set better.' ,
               '5. Heat a skillet or griddle over medium heat. Add a small amount of butter or oil to coat the surface.',
               '6. Spoon the batter onto the hot griddle, using approximately 1/4 cup for each pancake. Cook until bubbles form on the surface, then flip the pancakes and cook until golden brown on the other side.',
               '7. Once the pancakes are cooked through and golden brown on both sides, remove them from the griddle. Repeat the process with the remaining batter',
               '8. Serve the pancakes warm with your favorite toppings such  sliced bananas, berries, nuts, or yogurt'],    
    },
        {
          id: '2',
          title: 'Lunch',
          time: '12:00 AM',
          Imagetitle: 'Pesto Zucchini Noodles with Burst Cherry Tomatoes ',
      imageUri:'https://jessicainthekitchen.com/wp-content/uploads/2016/04/Pesto-Zucchini-Noodles-with-Burst-Cherry-Tomatoes-have-ALL-the-craveworthy-flavour-of-pasta-with-NONE-of-the-guilt-or-carbs-4.jpg',
      nutritionalValues:['Energy: 160 Kcal', 'Protein: 3g', 'carbohydrate: 9g ', 'Fat: 13g'],
      ingredients:['Creamy Cashew Pea Pesto',  '2 large zucchinis',  'ground sea salt & ground black pepper to taste', '1/2 cup small cherry tomatoes','1 tablespoon coconut oil','vegan parmesan cheese, to garnish'],
      recette:['1. Spiralize your zucchinis and then wrap in paper towels or a light kitchen dish cloth. Pat to soak up the excess water from the noodles.',
               '2. In a pan over medium high heat, add ¾ tablespoon of the coconut oil and heat. Add the zucchini noodles and cook for about 1 to 2 minutes until still slightly crunchy but tender. Remove from the pan and place in a bowl, but don"t remove the pan from the heat. ',
               '3. Add in the last teaspoon of coconut oil, and add the cherry tomatoes and toss in the coconut oil to coat. Heat through for about 2 minutes until the tomatoes are heated, and slightly burst. Season with salt and pepper. Remove from heat.',
               '4. Add a few tablespoons (to your liking, I added about 3-4 tablespoons) of the cashew pea pesto and toss lightly together to combine. Add the tomatoes to the mixture and combine. Serve with some vegan parmesan cheese sprinkled on top. Enjoy!' ]
    },
        {
          id: '3',
          title: 'Dinner',
          time: '17:30 AM - 18:00 AM',
          Imagetitle: 'Paleo Tuna Salad ',
      imageUri: 'https://askthedentist.com/wp-content/uploads/2017/07/5-minute-paleo-tuna-salad-1.jpg',
      nutritionalValues:['Energy: 400kcal', 'Protein: 30g', 'Carbohydrate: 15g','Fat:20g'],
      ingredients:['2 cans Tuna', ' 1 whole Avocado', '1/2 Bell Pepper','1/2 Pickle','Salt and pepper'],
      recette:['1. Drain the tuna in a strainer in the sink.',
               '2. Chop the bell pepper, pickle, and onion (optional). ',
              '3. In a medium bowl, mix the tuna, avocado, bell pepper, pickle, mustard, sea salt, black pepper, turmeric, and onion.',
              '4. Serve immediately'] 
  
  
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
          
          Imagetitle: ' Paleo Oatmeal',
          imageUri: 'https://www.paleorunningmomma.com/wp-content/uploads/2018/03/blueberry-breakfast-bake-9.jpg',
          nutritionalValues:['Energy: 400 Kcal', 'Protein: 15g', 'Carbohydrate:25g ','Fat:25g'],
          ingredients:['½ banana','2 tablespoons unsweetened shredded coconut', '2 tablespoons almond flour','½ cup cashew milk', 'pinch of sea salt'],
          recette:[' 1. Mash banana in bottom of bowl. Add remaining ingredients and stir to combine.',
                   ' 2. Microwave 1 - 2 minutes, until hot and starting to bubble. Stir and let stand a couple minutes. It will thicken slightly as it cools. ',
                   ' 3. Serve with your favorite toppings.']
          
        },
        {
          id: '2',
          title: 'Lunch',
          time: '12:00 AM',
          Imagetitle:'Grilled Fish Fillet ',
      imageUri: 'https://cuban.recipes/wp-content/uploads/2019/10/grilled-fish-fillet-recipe.jpg',
      nutritionalValues:['Energy: 150kcal', 'Protein: 25g', 'carbohydrate: 0g', 'Fat: 5g'],
      ingredients:['2 fish fillets', '2 garlic cloves', '1 tablespoon of fresh parsley', '4 tablespoons of olive oil', 'Salt and Pepper' ],
      recette:['1. The first step is to make a marinade with all of the ingredients so that later we can add it to the fish fillet. To do this, grind the garlic and in a dish add the lemon juice, parsley, salt, pepper, and olive oil.',
               '2. Mix the concoction well so that all of the ingredients become well-integrated and our fillets will be more flavorful.',
               '3. Spread the marinade that we made over the fillets with the help of a brush. Remember to cut some lines in your fillet if it has skin. Let it rest for 10 or 15 minutes.',
               '4. The next step is to put the frying pan on a high temperature And once it is hot add both fillets, first skin down if they have skin.',
               '5.  Cook for 5 minutes, flip, and cook for 5 more minutes. In all, 10 minutes is required to cook these 2.5cm fillets, but if they are larger then you should cook them for longer- until you see them become golden.',
               '6. Lastly, remove them from the pan and serve them accompanied with a fresh salad, roasted potatoes, and rice, which all combine very well.']
                
    },
        {
          id: '3',
          title: 'Dinner',
          time: '17:30 AM - 18:00 AM',
          Imagetitle: 'Spaghetti de courgette',
      imageUri:'https://resize-elle.ladmedia.fr/rcrop/1024,1024/img/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/news-de-la-redaction/courgette-spaghetti-3048118/61200331-2-fre-FR/5-idees-autour-des-spaghetti-de-courgette.jpg',
      nutritionalValues:['Energy: 20kcal', 'Protine: 2g', 'Carbohydrate: 4g', 'Fat: 0g'],
      ingredients:[ '2 tablespoons extra-virgin olive oil', '4 to 5 medium-sized zucchini', 'Salt and pepper'],
      recette:['1. Wash the zucchinis and trim the ends. Use a spiralizer to turn the zucchini into "spaghetti", or use a vegetable peeler to cut them into thin strips.',
               '2. Heat the olive oil in a large frying pan over medium heat. Add the zucchini spaghetti and sauté for 2-3 minutes, until tender-crisp. Season with salt and pepper.',
               '3.Transfer the zucchini spaghetti to a serving dish and add the sauce of your choice. These "zoodles " can be served in the same way as traditional pasta.'
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

 

export default PaleoDietScreen;
