import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    SafeAreaView,
    Platform,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';
import {CreditCardInput, LiteCreditCardInput} from "react-native-credit-card-input";
import {CarB} from "../CarBase";
import {PayB} from "../PayBase";
import AddPaymentMethod from "./AddPaymentMethod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PayLoad from "../PayLoad";
import {createStore} from 'redux';
import counter from "../reduxer"
import * as Location from "expo-location";


export default function MyWallet({navigation, route}) {

    const [number, setNumber] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [result, setResult] = useState("")

    const [rem, setRem] = useState("")


    const dsfsd = (form) => {
        setNumber(form.values.number)
        setExpiry(form.values.expiry)
        setCvc(form.values.cvc)

    }


    const focus = navigation.isFocused();

    useEffect(() => {
        (async () => {
            try {
                setNumber(await AsyncStorage.getItem('number'))
                setExpiry(await AsyncStorage.getItem('expiry'))
                setCvc(await AsyncStorage.getItem('cvc'))
                setRem(await AsyncStorage.getItem('Money'))
            } catch (err) {
                console.log('error signing up: ', err)
            }
        })();
    }, []);

    return (
        <View style={{flex: 2}}>

            <View style={{flex: 1, position: 'absolute', top: 30, left: 10, flexDirection: 'row'}}>

                <TouchableOpacity onPress={() => navigation.openDrawer()}>

                    <Entypo name="menu" size={40} color="black"/>
                </TouchableOpacity>
                <View style={{marginTop:10}}>
                <Text>   Остаток на счету: {rem} грн</Text>
                </View>
            </View>

            <View style={{flex: 4, marginTop: 70}}>
                < CreditCardInput cardImageFront={require("../Image/gift-card.png")}
                                  cardImageBack={require("../Image/gift-card.png")}
                                  labels={{number: "Номер", expiry: "Дата", cvc: "CVC/CCV"}}
                                  placeholders={{number: number, expiry: expiry, cvc: cvc}} onChange={dsfsd}/>
                <TouchableOpacity style={{
                    marginTop: 10,
                    flex: 1,
                    backgroundColor: 'white',
                    marginLeft: 70,
                    marginRight: 70,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={async () => {
                    try {
                        await AsyncStorage.multiSet([['number', number], ['expiry', expiry], ['cvc', cvc]]);
                        // const result = await AsyncStorage.multiGet(['number', 'expiry', 'cvc'])
                    } catch (err) {
                        console.log('error signing up: ', err)
                    }
                }}>
                    <View >
                    <Text >
                        Добавить карту
                    </Text>
                    </View>
                </TouchableOpacity>

            </View>
            {/*<View style={{justifyContent:'center',alignItems:'center'}}>*/}
            {/*<Text >Список всех операций</Text>*/}
            {/*</View>*/}
            <ScrollView style={{weight:'40%',height:'20%'}}>
                {

                    PayB.map(item => {
                            return (
                                <View style={{alignItems: 'center', justifyContent: 'center',backgroundColor:'black',marginLeft:85,marginRight:85,marginTop:10,padding:10,borderRadius:20}}>
                                    <Text style={{color:'white'}}>{item.date} = {item.price} $ </Text>
                                </View>
                            );

                        }
                    )
                }
            </ScrollView>


            <ScrollView style={{flex:1}}>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity  onPress={async () => {
                        try {
                            setResult(await AsyncStorage.multiGet(['number', 'expiry', 'cvc']))
                        } catch (err) {
                            console.log('error signing up: ', err)
                        }
                    }}>
                        <View style={{marginTop:5,backgroundColor:'green',borderRadius:5}}>
                        <Text style={{color:'white'}}>Просмотреть добавленные карты</Text>
                        </View>
                    </TouchableOpacity>
                    {(result !== '') ? <View><Text> Номер: {result[0][1]}</Text>
                        <Text> Дата: {result[1][1]}    CVC/CCV: {result[2][1]}</Text>
                        </View>: null}

                </View>
            </ScrollView>


        </View>
    );


}






