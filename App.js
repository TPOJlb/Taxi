import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Screen/HomePage';
import SwiperPage from './Screen/Swiper';
import Authentication from './Screen/Authentication';
import AddPhone from './Screen/AddPhone';
import Person from './Screen/Person';
import Help from './Screen/Help';
import {NavigationContainer} from "@react-navigation/native";
import 'react-native-gesture-handler';
import LeftMenu from './Screen/LeftMenu'

const Stack = createNativeStackNavigator();

export default function App() {




    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Home" component={HomePage}/>
                <Stack.Screen name="Swiper" component={SwiperPage}/>
                <Stack.Screen name="Authentication" component={Authentication}/>
                <Stack.Screen name="AddPhone" component={AddPhone}/>
                <Stack.Screen name="Help" component={Help}/>
                <Stack.Screen name="LeftMenu" component={LeftMenu}/>

            </Stack.Navigator>
        </NavigationContainer>

    );
}
