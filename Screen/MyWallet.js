import React,{useState} from 'react';
import {ScrollView,SafeAreaView,Platform,Text,View, StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image } from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import {CarB} from "../CarBase";
import {PayB} from "../PayBase";
import AddPaymentMethod from "./AddPaymentMethod";
import AsyncStorage from "@react-native-async-storage/async-storage";








export default function MyWallet({navigation}) {

    const [number,setNumber] = useState('')
    const [expiry,setExpiry] = useState('')
    const [cvc,setCvc] = useState('')

    const dsfsd = (form) => {
        setNumber(form.values.number)
        setExpiry(form.values.expiry)
        setCvc(form.values.cvc)
        console.log(number)
        console.log(expiry)
        console.log(cvc)
    }


    return (
        <View style={{flex: 1}}>

            <View style={{flex:1,position: 'absolute',top: 30,left:10}}>

                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                    <Entypo name="menu" size={40} color="black" />
                </TouchableOpacity>

            </View>

            <View style={{marginTop:70}}>
                < CreditCardInput onChange = {dsfsd}/>
                <TouchableOpacity onPress={async () => {
                     try {
                         await AsyncStorage.multiSet([['number', number], ['expiry', expiry], ['cvc', cvc]]);
                         const result = await AsyncStorage.multiGet(['number', 'expiry', 'cvc'])


                         console.log(result)
                    } catch (err) {
                        console.log('error signing up: ', err)
                    }
                }}>
                    <Text>
                        Добавить карту
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{flex:1,}}>
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

        </View>
    );

}



