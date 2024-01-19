import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
import SignUpt from './screens/SignUpt';
import Login from './screens/Login';
import Formulaire from './screens/Formulaire';
import NutritionScreen from './screens/NutritionScreen';
import Today from './screens/Today';
import DietCategoriesScreen from './screens/DietCategoriesScreen';
import VeganDietScreen from './screens/VeganDietScreen'; 
import KetoDietScreen from './screens/KetoDietScreen';
import PaleoDietScreen from './screens/PaleoDietScreen';
import DetoxDietScreen from './screens/DetoxDietScreen';
import RecetteDetailsScreen from './screens/RecetteDetailsScreen';
import Profile from './screens/Profile';
const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUpt} options={{ headerShown: false }} />
                <Stack.Screen name="Today" component={Today} options={{ headerShown: false }} />
                <Stack.Screen
  name="Profile"
  component={Profile}
  options={{ headerShown: false }}
/>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="NutritionScreen" component={NutritionScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Formulaire" component={Formulaire} options={{ headerShown: false }} />
                <Stack.Screen name="Workout" component={WorkoutScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Fit" component={FitScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Rest" component={RestScreen} options={{ headerShown: false }} />
                <Stack.Screen name="DietCategories" component={DietCategoriesScreen} options={{ headerShown: false }} />
        <Stack.Screen name='VeganDiet' component={VeganDietScreen} options={{ headerShown: false }} />
        <Stack.Screen name='KetoDiet' component={KetoDietScreen} options={{ headerShown: false }} />
        <Stack.Screen name='PaleoDiet' component={PaleoDietScreen} options={{ headerShown: false }} />
        <Stack.Screen name='DetoxDiet' component={DetoxDietScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='RecetteDetails' component={RecetteDetailsScreen} options={{ headerShown: false }} />
        
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigator

const styles = StyleSheet.create({})