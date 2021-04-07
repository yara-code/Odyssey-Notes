import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text,View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function Mainpage({navigation}) {
  return (
    <View>
        <Text>BIg Titty Yara ( . Y . )</Text>
        <Button title="New Notes" onPress={() => navigation.navigate('Notes')}></Button>
        <Button title="Settings" onPress={() => navigation.navigate('Settings')}></Button>
        
    </View>
  );
}

