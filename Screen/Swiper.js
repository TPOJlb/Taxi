import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Swiper from 'react-native-swiper';

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

export default function SwiperPage ({navigation}){
        return (
            <Swiper style={styles.wrapper} stickyHeaderHiddenOnScroll = {false} showsButtons={false} loop = {false} dotColor={'white'} activeDotColor={'green'} title={123}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>У</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <TouchableOpacity onPress = {()=>navigation.navigate('Authentication')}>
                        <Text>Ghbdtn</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
}