import React from 'react';
import {ScrollView,SafeAreaView,Platform,Text,View, StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image} from 'react-native';
import {Entypo} from '@expo/vector-icons';





export default function History({navigation}) {

    return (
        <View style={{flex: 1,alignItems: 'center',justifyContent:'center'}}>
            <Text style={{color:'black'}}>History</Text>
            <View style={{flex:1,position: 'absolute',top: 30,left:10}}>
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Entypo name="menu" size={40} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}