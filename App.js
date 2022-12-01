/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{NavigationContainer} from '@react-navigation/native'
// import { NavigationContainer } from '@react-navigation/native';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/fonts/screens/Login';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section:()=> Node=() => {
  // const isDarkMode = useColorScheme() === 'dark';
  
};

const App: () => Node = () => {
const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.sectionContainer} >
   <NavigationContainer>
   <Stack.Navigator screenOptions={{headerShown:false}}>
   <Stack.Screen
          name="Home"
          component={Login}
       
        />
   </Stack.Navigator>

   </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'white',
    height: '100%'

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
