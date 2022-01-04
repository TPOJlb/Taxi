import React, {useEffect, useState} from 'react';
import {ScrollView,SafeAreaView,Platform,Text,View, StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image} from 'react-native';
import {CarB} from "../CarBase";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore } from 'redux';
import {taskCommunication} from "../reduxer"




export default function ChooseCar({listNam,setListNam,distan,setDistan,dura,setDura}) {
    const [mony,setMony] = useState('')
    const [nony,setNony] = useState('')
    const numbers = [];

    console.log(taskCommunication)
    useEffect(async () => {
        setNony(await AsyncStorage.getItem('Money'))
    }, [''])



    return (
        <View style={{flex:1}}>
            <ScrollView style={{position: 'absolute',width: '80%', height: '18.5%',left:35,top: 552}}>{
                CarB.map(item => {
                    numbers.push(item.price);
                    return(
                        <View key={item.key} style={{flex: 1, backgroundColor: 'white', width: '100%', height: 60,borderWidth:2,borderRadius:15,borderColor:'black',marginBottom:3}}>
                            <TouchableOpacity key={item.key} style={{flexDirection:'row',flex: 1,margin:3}} onPress={async ()=> {

                                const mon = (item.price * distan).toFixed(2)
                                const result = parseFloat(nony) - parseFloat(mon)
                                const remef  = parseFloat(result.toFixed(2))
                                const ferm = remef.toString()
                                try {
                                    await AsyncStorage.setItem('Money', ferm);
                                } catch (err) {
                                    console.log('error signing up: ', err)
                                }
                                {setListNam(listNam + 1)}
                            }}>
                                <Image source={item.image} style={{width: '20%', height: 54}}/>
                                <View style={{justifyContent:'center',flex:1}}>
                                <Text>  {item.name}</Text>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text>   </Text>
                                        <AntDesign name="star" size={7} color="black" />
                                        <Text style={{fontSize:8}}> {item.stars}</Text>
                                    </View>

                                </View>
                                <View style={{justifyContent:'center',alignItems:'flex-end',flex:1.5,flexDirection:'column'}}>

                                    <Text>Price {(item.price * distan).toFixed(2)} $   </Text>
                                    <Text style={{fontSize:8}}>distance : {distan} km, p/h = {item.price} $      </Text>
                                    <Text style={{fontSize:8}}>time to finish {dura|0} minut   </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                    }
                )
            }</ScrollView>
        </View>
    );
}
