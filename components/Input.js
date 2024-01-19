import { StyleSheet, Text, View,KeyboardAvoidingView, TextInput, Platform } from 'react-native'
import React , { useState }from 'react'

export default function Input() {
    
  
  return (
    <KeyboardAvoidingView 
        styles={styles.inputGroup}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='Name'
            
            />

        </View>
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='Lastname'
            />

        </View>
         
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='Email'
            />
            
        </View>
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='Password' secureTextEntry
            />
            
        </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

    inputGroup:{
        alignItems :'center',
        justifyContent:'center',
        marginTop :1,
        
    },
    container: {
        backgroundColor: '#041C2F',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        width: "100%",
        padding: 1,
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
}
);