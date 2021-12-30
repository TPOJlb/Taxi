import React, {useEffect, useState } from 'react';
import {ScrollView,SafeAreaView,Platform,Text,View, StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image } from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import {CarB} from "../CarBase";
import {PayB} from "../PayBase";
import AddPaymentMethod from "./AddPaymentMethod";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyWallet({navigation,route}) {

    const [money, setMoney] = useState('')
    const [number, setNumber] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [result, setResult] = useState("")
    const [elev, setElev] = useState('213')


    const dsfsd = (form) => {
        setNumber(form.values.number)
        setExpiry(form.values.expiry)
        setCvc(form.values.cvc)

    }


    if (elev !== money) {
        useEffect(async () => {
            setMoney(await AsyncStorage.getItem("Money"))
            setElev(money)
        }, [])
    }


    console.log(route)


    return (
        <View style={{flex: 1}}>
            <View style={{flex:1,position: 'absolute',top: 30,left:10,flexDirection:'row'}}>

                <TouchableOpacity onPress={()=>navigation.openDrawer()}>

                    <Entypo name="menu" size={40} color="black" />
                </TouchableOpacity>
                <Text>{money}</Text>
            </View>

            <View style={{marginTop:70}}>
                < CreditCardInput placeholders = {{number: number, expiry: expiry, cvc: expiry }} onChange = {dsfsd}/>
                <TouchableOpacity onPress={async () => {
                     try {
                         await AsyncStorage.multiSet([['number', number], ['expiry', expiry], ['cvc', cvc]]);
                         const result = await AsyncStorage.multiGet(['number', 'expiry', 'cvc'])
                    } catch (err) {
                        console.log('error signing up: ', err)
                    }
                }}>
                    <Text>
                        Добавить карту
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{flex:1}}>
                {
                    PayB.map(item => {
                        return(
                            <View style={{alignItems: 'center',justifyContent: 'center'}}>
                                <Text>{item.date} = {item.price} $ </Text>
                            </View>
                        );

                        }
                    )
                }
            </ScrollView>


            <ScrollView style={{flex: 1}}>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={async () => {
                        try {
                            setResult(await AsyncStorage.multiGet(['number', 'expiry', 'cvc']))
                        } catch (err) {
                            console.log('error signing up: ', err)
                        }
                    }}>

                        <Text>ggbljhg</Text>
                    </TouchableOpacity>
                    <Text></Text>
                    {(result !== '')? <Text>{result[0][1]} {result[1][1]} {result[2][1]}</Text>:null}

                </View>
            </ScrollView>


        </View>
    );

}



