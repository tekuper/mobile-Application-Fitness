import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const App1 = () => {
  return (
    <ImageBackground
      source={require("../assets/111.png")} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>just you getting better </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // fourth values for opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white', // Text color
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App1;