import { StyleSheet, Text,Image, View } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View style={styles.img}>
    <Image
        source ={require('../assets/logo1.png')}
        style={{ width :350 ,height : 300}}      
    />
    </View>
  )
}

const styles = StyleSheet.create({

    img:{
        paddingTop:1,
        justifyContent :'center',
        alignItems:'center',
        paddingLeft:'10%',
        paddingRight:'10%'
      }
})