
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';




const KetoDietScreen = ({ navigation }) => {
    
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
          
       Imagetitle:'Fruit yogurt with oat flakes ',
          imageUri: 'https://i.pinimg.com/564x/20/9d/43/209d43cd7b59ec22174da8cf2ce21102.jpg',
          nutritionalValues: ['Energie: 400 Kcal', 'Protein: 13g', 'carbohydrate: 35g '],
          ingredients:['1 plain yoghurt', '1 tbsp oat flakes', '150g red fruit', '1 banana', 'blueberries', 'almonds'],
          recette:[' 1. rinse and blot blueberries ',
                   ' 2. Mix the yoghurt with the red fruit and slice the banana' ,
                   ' 3. Pour the mixture into a bowl and divide between the banana slices, almonds, blueberries and oatmeal' ]
      },
        {
          id: '2',
          title: 'Lunch',
          time: '12:00 AM',
          Imagetitle:'Breaded Fish Fillet',
      imageUri: 'https://www.cuisineactuelle.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2020.2F04.2F30.2Fa412dddf-4212-4a58-a227-96b401f9c8aa.2Ejpeg/300x225/quality/80/crop-from/center/filet-de-truite-panee.jpeg',
      nutritionalValues:['Energie: 235 Kcal', 'Protein: 15g', 'carbohydrate: 17g ', 'fat: 12,5g'],
      ingredients:['6 white fish fillets', '2 eggs', '100g Flour', ' 100g breadcrumbs', 'Vegetable oil', ' Salt and Pepper'],
      recette:['1. Cut the fish fillets into sticks of about 9 by 3 cm',
              ' 2. Prepare 3 plates: one with the flour to which you will add a little salt, one with the breadcrumbs and the other with the lightly beaten eggs. ',
              ' 3. Dredge each stick in flour and shake off excess. Dredge in egg yolks, then in breadcrumbs.',
              ' 4. Heat a large frying pan with oil and brown the sticks for 3 min on each side. Place on absorbent paper and serve' ]
          
    },
        {
          id: '3',
          title: 'Dinner',
          time: '17:30 AM - 18:00 AM',
          Imagetitle: 'Grilled escallop ',
          imageUri: 'https://i.pinimg.com/564x/af/dc/ff/afdcff4ce93849abaf3566371276a68d.jpg',
          nutritionalValues:['Energie: 170kcal', 'Protein: 31g', 'carbohydrate: 0g', 'Fat: 25g'],
          ingredients:['2 chicken escallops', '1 tbsp olive oil',' grilling spices containing salt',' 1 onion'],
          recette:['1. Place your chicken cutlets in a soup plate, pour in the olive oil, coat the cutlets well, then sprinkle the spices on both sides.',
                   '2. Marinate at room temperature for 20 minutes '
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
          
      Imagetitle: 'keto almond and coconut porridge', 
      imageUri:'https://www.maxdegenie.com/wp-content/uploads/2021/05/Porridge-farine-damande-4-scaled-e1651057692458.jpg',
      nutritionalValues:['Energie: 300 Kcal', 'Protein: 10g', 'carbohydrate: 15g ', 'Fat: 25'],
      ingredients:['25g deoiled organic almond flour', '8g grated coconut','6g ground linseed', '15g almonds ', '125ml vegetable milk'],
      recette:['1.Take a skillet or small saucepan.',
               '2. Mix all the ingredients together and cook over low heat until the mixture reaches the desired texture.',
               '3. Remove from heat and pour into a small bowl.',
               '4. Add the toppings of your choice (chocolate chips, almond slivers, coconut pieces, raspberries...)' ,
               '5. Enjoy hot!']   
    },
        {
          id: '2',
          title: 'Lunch',
          time: '12:00 AM',
          Imagetitle: 'Ham and tomato omellete',
          imageUri:'https://www.fourchette-et-bikini.fr/sites/default/files/styles/1200x675/public/migration-images/2e2b0f0446c8f2fa3ba40971dbce990e.jpg',
          nutritionalValues:['Energie: 200 Kcal', 'Protein: 20g', 'carbohydrate: 2g ', 'Fat: 11,5g'],
          ingredients:['2 eggs', '4 cherry tomatoes','1 small green pepper', '30g  cheese', 'aneth', 'parsley', '1 walnut of butter ', ' Salt and Pepper'],
          recette:['1. Beat the eggs with salt and pepper in a bowl.',
                   '2. Melt the butter in a frying pan',
                   '3. Pour the beaten eggs into the pan',
                   '4.Cook the omelette for 2-3 minutes on each side.' ,
                   '5. Remove the omelette from the pan and leave to cool on a plate.',
                   '6. Meanwhile, clean, dry and halve the cherry tomatoes',
                   '7. Clean, seed and chop the chilli pepper.',
                   '8. When the omelette is cold, spread the goat "s cheese on top.',
                   '9. Add the cherry tomatoes, chilli, dill and chopped parsley, then fold over one edge of the omelette.']
    },
        {
          id: '3',
          title: 'Dinner',
          time: '17:30 AM - 18:00 AM',
          Imagetitle: 'Caesar salad with grilled chicken  ',
      imageUri: 'https://deliciouslittlebites.com/wp-content/uploads/2020/06/Keto-Caesar-Salad-Recipe-Images-7-500x500.jpg',
      nutritionalValues:['Energy: 400kcal', 'Protein: 40g', 'carbohydrate: 10g', 'Fat:50g'],
      ingredients:['1/2 cup mayonnaise', ' 2 tablespoons grated Parmesan cheese', '1 clove garlic','1 citron','Salt and pepper',],
      recette:['1. Romaine lettuce, washed and chopped. Additional grated Parmesan cheese for topping',
               '2. Preheat grill pan. Grill the chicken breasts for 6-8 minutes per side or until the internal temperature reaches 165°F (74°C). Let them rest for a few minutes before slicing. ',
              '3. In a bowl, whisk together mayonnaise, grated Parmesan cheese, Dijon mustard, anchovy paste (if using), minced garlic, lemon juice, salt, and pepper. Adjust the seasonings to taste.',
              '4. In a large bowl, toss the chopped Romaine lettuce with the Caesar dressing until well coated.',
              '5. Top the salad with sliced grilled chicken.',
              '6. Sprinkle additional grated Parmesan cheese on top.',
              '7. Serve immediately and enjoy your Keto Caesar Salad with Grilled Chicken!']
  
              
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

 

export default KetoDietScreen;
