import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
import Person from './Person';
import HomePage from "./HomePage";
import Help from './Help'
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import Swiper from "react-native-swiper";
import SwiperPage from "./Swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PersonInfo from "../PersonInfo";
import MyWallet from "./MyWallet";
import History from "./History";
import {useEffect, useState} from "react";
import { LinearGradient } from 'expo-linear-gradient';

export default function LeftMenu({route, navigation}) {


    function CustomDrawer(props) {
        return (
            <View style={{flex: 1}}>
                <LinearGradient
                    colors={['#ff0066', '#cc6600']}
                    style={{flex: 1}}

                >
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                </DrawerContentScrollView>
                <TouchableOpacity style={{marginLeft:15,marginBottom:10}} onPress={() => {
                    navigation.navigate('Swiper')
                }}>
                    <Text style={{fontSize:14,fontFamily:'RobotoLight'}}>Exit</Text>
                </TouchableOpacity>
            </LinearGradient>
            </View>
        )


    }




    const location = route.params.location;

    return (
        <Drawer.Navigator
            screenOptions={{headerShown: false}}
            drawerContent={props => <CustomDrawer {...props} />}
            initialRouteName="Map"
        >

            <Drawer.Screen name="Home" component={HomePage}/>
            <Drawer.Screen name="History" component={History}/>
            <Drawer.Screen name="Map" component={Person} initialParams={{location: location}}/>
            <Drawer.Screen name="My wallet" component={MyWallet} />
        </Drawer.Navigator>
    );
}
