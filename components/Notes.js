
import React from 'react';
import { View, Button } from 'react-native';
import { Icon } from 'react-native-elements'
import * as eva from '@eva-design/eva';
import { Layout, Text } from '@ui-kitten/components';
import {TextInput} from 'react-native';

const Notes = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon name='arrow-left'type='evilicon'color='#517fa4'/>
      <Button title="Main Menu" onPress={() => navigation.goBack()} />

      <TextInput placeholder = 'Title'></TextInput>
    
      <TextInput
        onChangeText={onChangeText}
        value={text}
        > 
      </TextInput>
    </Layout>
  );
}

export default Notes;