import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { ImageUrlConstants } from '../constants/imageUrls';

export default function SplashScreen() {
  return (
    <View style={styles.background}>
      <Image style={styles.image} source={ImageUrlConstants.appIcon}/>
    </View>
  );
}

const styles = StyleSheet.create({
   background: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
   },
   image: {
      width: 210,
      height: 195,
      resizeMode:'contain'
   },
   title:{
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    justifyContent:'center',
    textAlign:'center'
  }
})