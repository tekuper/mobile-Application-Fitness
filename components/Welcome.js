import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Welcome() {
  return (
    <View>
      <Text style={styles.wel}>Welcome to Fitness </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    wel:{
      color:'#04C8FA',
        fontSize : 25,
        textAlign: 'center',
        margin:7,
        fontWeight :'bold',
    }
})