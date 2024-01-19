





import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../components/Logo';
import HomeScreen from '../screens/HomeScreen';
import Today from './Today';
import axios from 'axios';



const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = async () => {
    try {
      const response = await axios.post('https://localhost:3000/signin', {
        username: username,
        password: password

      });
    }
    if (response.status === 200) {
      // L'utilisateur a été ajouté avec succès, vous pouvez naviguer vers une autre page
      navigation.navigate('Today', { username });
    } else {
      // Gérez les autres cas de réponse si nécessaire
    }
  } catch (error) {
    // Gérez les erreurs de requête ici
    console.error('Erreur lors de la requête:', error);
  }
    // Ici, vous pouvez ajouter la logique de validation du login.
    // Si les informations de connexion sont correctes, vous pouvez naviguer vers une autre page.
    // Par exemple :
    //if (username === 'Eya' && password === '123') {
      //navigation.navigate('Today', {username}); 
    //} else {
      //alert('Identifiants incorrects');
    //}
  };

  return (
    <View style={styles.container}>
      <Logo />

      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={(onSignInPressed)}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#041C2F',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    width: "100%",
    padding: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#A9EAFE',
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
  },
  input: {
    borderWidth: 2,
    fontSize: 18,
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});

export default Login;
