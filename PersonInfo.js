import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Entypo} from "@expo/vector-icons";

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default function PersonInfo ({navigation}){
    return (
        <View style={{flex:1,position: 'absolute',top: 30,left:10}}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Entypo name="menu" size={40} color="black" />
            </TouchableOpacity>
        </View>
    )
}