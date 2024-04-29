import { StatusBar   } from 'expo-status-bar';
import { StyleSheet, Text, View  , TouchableOpacity   , Animated  , Easing} from 'react-native';
import React, {useRef, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home';
import FadeinView from './Components/FadeinView'
import ListAnimation from './Components/ListAnimation';
import ButtonAnimation from './Components/ButtonAnimation';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function App() {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer> 
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown : false}} />
          <Stack.Screen name="FadeIn" component={FadeinView}   options={{headerShown : false}}/>
          <Stack.Screen name="ListView" component={ListAnimation}  options={{headerShown : false}}/>
          <Stack.Screen name="ButtonAnimation" component={ButtonAnimation}   options={{headerShown : false}}/>



      </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
