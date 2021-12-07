import React, {useEffect,useState} from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

const first = async ()=>{
    const value = await AsyncStorage.setItem("FirstEntrance", 'first')
    return(value);
}
const second = async ()=>{
    return await AsyncStorage.getItem("FirstEntrance")
}

const fhtee = async ()=>{
    return await AsyncStorage.removeItem('FirstEntrance');
}


export default function HomePage({navigation}) {
    const [thee, setThee] = useState('');
    console.log('1'+thee);
    useEffect(async () => {
        setThee(await second());
        await first();
     //  await fhtee();
    }, [''])
    console.log('2'+thee);
    if (thee == null) {
        navigation.navigate('Swiper');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate('Authentication')}>
                <Text>HomePage</Text>
            </TouchableOpacity>
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
