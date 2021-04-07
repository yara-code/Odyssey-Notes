import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateNotes from './components/CreateNotes';
import Mainpage from './components/Mainpage';
import Settings from './components/Settings';
import Note from './components/Note';
import { StyleSheet } from 'react-native';


const Stack = createStackNavigator();


const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default function App() {
  return (
      <ApplicationProvider {...eva} theme={eva.dark}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Home"
            headerMode="screen"
            screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
            }}>

            <Stack.Screen name='Home' options={{ title: 'Odyssey Notes'}} component={Mainpage} />

            <Stack.Screen 
              name='CreateNotes' 
              component={CreateNotes}
              options={{
                cardStyleInterpolator: forFade
              }} />

            <Stack.Screen 
              name='Note' 
              component={Note}
              options={{
                cardStyleInterpolator: forFade
              }} />

              <Stack.Screen 
              name='Settings' 
              component={Settings}
              options={{
                cardStyleInterpolator: forFade
              }} />


          </Stack.Navigator>
        </NavigationContainer>
        
      </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  
});


// import React from 'react';
// import * as eva from '@eva-design/eva';
// import { ApplicationProvider} from '@ui-kitten/components';
// import { createStackNavigator } from '@react-navigation/stack';
// import Notes from './components/Notes'


// export default () => (
//   <ApplicationProvider {...eva} theme={eva.dark}>
    
//     <Notes></Notes>
//   </ApplicationProvider>
// );