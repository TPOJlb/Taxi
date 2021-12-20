import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import Person from './Person';
import HomePage from "./HomePage";
import Help from './Help'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import Swiper from "react-native-swiper";
import SwiperPage from "./Swiper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LeftMenu({route,navigation}) {


    function CustomDrawer(props){
        return (
            <View style={{flex:1}}>

                    <DrawerContentScrollView {...props}>
                        <DrawerItemList {...props} />
                    </DrawerContentScrollView>
                <TouchableOpacity onPress={()=>{
                    alert("Ты вышел")
                }}>
                <Text>Exit</Text>
                </TouchableOpacity>
            </View>
    )
}
const location = route.params.location;

    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={ props => <CustomDrawer {...props} /> }
            initialRouteName="Person"
        >

                <Drawer.Screen name="Home" component={HomePage} />
                <Drawer.Screen name="Swiper" component={SwiperPage}/>
                 <Drawer.Screen name="Person"  component={Person} initialParams={{ location: location }} />
            </Drawer.Navigator>
    );
}
