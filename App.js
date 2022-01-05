import React,{useState} from 'react';
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
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";

const Stack = createNativeStackNavigator();

const fonts = () => Font.loadAsync({

    'RobotoRegular': require('./assets/Fonts/RobotoSlab-Regular.ttf'),
    'RobotoBlack': require('./assets/Fonts/RobotoSlab-Black.ttf'),
    'RobotoExtraBold': require('./assets/Fonts/RobotoSlab-ExtraBold.ttf'),
    'RobotoExtraLight': require('./assets/Fonts/RobotoSlab-ExtraLight.ttf'),
    'RobotoBold': require('./assets/Fonts/RobotoSlab-Bold.ttf'),
    'RobotoLight': require('./assets/Fonts/RobotoSlab-Light.ttf'),
    'RobotoMedium': require('./assets/Fonts/RobotoSlab-Medium.ttf'),
    'RobotoSemiBold': require('./assets/Fonts/RobotoSlab-SemiBold.ttf'),
    'RobotoThin': require('./assets/Fonts/RobotoSlab-Thin.ttf'),

});

export default function App() {


    const [font,setFont] = useState(false);
    if(font) {
        return( <NavigationContainer>
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

    }else{
        return(

            <AppLoading  startAsync={fonts} onFinish={() => setFont(true)} onError={err => console.log(err)}/>

        );
    }

}
