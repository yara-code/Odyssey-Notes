import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mainpage from './components/Mainpage'
import Notes from './components/Notes'

export default function App() {
  return (
    <View style = {styles.container}>
      <Text>Odyssey Notes</Text>
      <Notes></Notes>
      <Mainpage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
