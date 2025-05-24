import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//import Img from './source/img'
import Userlogin from './source/userlogin'
//import Button from './source/button'
import Sound from './source/sound'
//import Useeffect from './source/useeffect'
import Video from './source/video'
//import Login from './source/login'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './source/welcome';

const Stack = createNativeStackNavigator();


const App = () => { 
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Userlogin} />
        <Stack.Screen name="Profile" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({});
