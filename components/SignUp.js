import { StyleSheet, Text, View ,TouchableOpacity, Alert}  from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation();
  const handlePress = () => {
    
    Alert.alert('Account Created', 'Your account has been created.');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
    <Text style={styles.SignUp}>SignUp</Text>
  </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#041C2F',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    width: "100%",
    padding: 1,
  },

  SignUp: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'lightblue',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 18,
    fontWeight: 'bold',
  },
});