import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Starting from './screens/Starting'
import Introone from './screens/Introone'

export type RootStackParamList = {
  Starting: undefined;
  Introone: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Starting'>
        <Stack.Screen name='Starting' component={Starting} options={{ headerShown: false }} />
        <Stack.Screen name='Introone' component={Introone} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})