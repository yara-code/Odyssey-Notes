import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, onChangeNumber, Button, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'


const Notes = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

  return (
    <View >
        <View style = {styles.idk}> 
            <Icon name='arrow-left'type='evilicon'color='#517fa4'/>
            <TextInput placeholder = "Title"style = {styles.container}> </TextInput>
        </View>
    
       <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
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
  input: {
    height: '80%',
  },
  idk: {
    flexDirection: 'row'
  },
});

export default Notes;