import React, {useEffect,useState} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
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
    useEffect(async () => {

        await AsyncStorage.setItem('Money', '122545.23');
        setThee(await second());
        await first();
     //await fhtee();
    }, [''])
    if (thee == null) {
        navigation.navigate('Swiper');

    }

    return (
        <View style={styles.container}>
            <View onPress={()=>navigation.navigate('Authentication')}>
                <Image
                    style={{width:100,height:100}}
                    source={require('../Image/loading.png')}
                />
                <Text>      Loading...</Text>
            </View>
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
