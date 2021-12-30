import React, {useEffect, useState} from 'react';
import {ScrollView,SafeAreaView,Platform,Text,View, StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "react-native-phone-number-input/lib/styles";




export default function PayLoad({focus}) {

console.log("324234"+focus)
        const [result, setResult] = useState('')

        useEffect(async () => {
            try {
                setResult(await AsyncStorage.getItem("Money"))
                console.log(result)
            } catch (err) {
                console.log('error signing up: ', err)
            }

        }, [''])
    if (result === '') {
        return (<View style={{flex:1}}>
            <Text>122545.23</Text>
        </View>);
    } else {
        return (<View style={{flex:1}}>
            <Text>{result}</Text>
        </View>);
    }

}
