import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";
  

export default function Settings({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Font Size</Text>
      <Text style={styles.title}>Font Color</Text>
      <Text style={styles.title}>Note Color</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      marginVertical: 4,
      backgroundColor: '#192a56',
      justifyContent: 'center',
    },
    title: {
      marginHorizontal: 8,
      color: '#ffd32a',
      fontSize: responsiveScreenFontSize(2)
    },
    
  });