import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Bai1 from './components/Bai1';
import Bai2 from './components/Bai2';
import Bai3 from './components/Bai3';
import Bai5 from './components/Bai5';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Bai5} />
        
        
      </Stack.Navigator>
    </NavigationContainer >
  );
}