import { StyleSheet, Text, View ,TouchableOpacity ,Button } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Account() {
  const navigation = useNavigation();

  return (
         <TouchableOpacity  onPress={() => navigation.navigate('login')} style={styles.container}>
             <Text style={styles.Login}>connecter</Text>
          </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#041C2F',
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 36,
      width: "100%",
      padding: 1,
    },
   Login: {
      borderWidth: 2,
      fontSize: 18,
      borderRadius: 20,
      backgroundColor: 'lightblue',
      marginBottom: 20,
      paddingVertical: 10,
      paddingHorizontal: 25,
    },
});