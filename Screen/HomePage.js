import React from 'react';
import {StyleSheet, Text, View,TouchableOpacity } from 'react-native'

export default function HomePage({navigation}) {
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress = {()=>navigation.navigate('Swiper')}>
                <Text>Ghbdtn</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
