import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Screen/HomePage';
import SwiperPage from './Screen/Swiper';
import Authentication from './Screen/Authentication';
import {NavigationContainer} from "@react-navigation/native";
import 'react-native-gesture-handler';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
      }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Swiper" component={SwiperPage} />
          <Stack.Screen name="Authentication" component={Authentication} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

