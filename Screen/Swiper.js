import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View,Image} from 'react-native';
import Swiper from 'react-native-swiper';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    wrapper: {
   },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
    }
})


const onSwipe  =  ( index,navigation )  =>  {
    if(index === 2){
        return(navigation.navigate('Authentication'))
    }
}

export default function SwiperPage ({navigation}){
        return (
            <Swiper style={styles.wrapper} stickyHeaderHiddenOnScroll = {false} showsButtons={false} loop = {false} dotColor={'black'} activeDotColor={'green'} title={123}
                    onIndexChanged={(index) => onSwipe(index,navigation)}
            >
                <View style={{flex:1}}>
                    <LinearGradient
                        colors={['#ff0066', '#cc6600']}
                        style={styles.slide1}
                    >
                    <Image
                        style={{marginBottom:150,width:250,height:250}}
                        source={require('../Image/premium-icon-taxi-1434924.png')}
                    />
                    <Text style={{fontFamily:'RobotoMedium',fontSize:22,color:'orange'}}>Bac приветвует такси 15-83</Text>
                    </LinearGradient>
                </View>
                <View style={{flex:1}}>
                    <LinearGradient
                        colors={['#ff0066', '#cc6600']}
                        style={styles.slide2}
                    >
                    <Image
                        style={{marginBottom:150,width:250,height:250}}
                        source={require('../Image/free-icon-taxi-5900567.png')}
                    />
                    <Text style={{fontFamily:'RobotoMedium',fontSize:22,color:'orange'}}>Самые низкие цены!!!</Text>
                </LinearGradient>
                </View>
                <View style={{flex:1}}>
                    <LinearGradient
                        colors={['#ff0066', '#cc6600']}
                        style={styles.slide3}
                    >
                    <View>

                        <Image
                            style={{marginBottom:150,width:250,height:250}}
                            source={require('../Image/free-icon-route-2481420.png')}
                        />
                        <Text style={{fontFamily:'RobotoMedium',fontSize:22,color:'orange'}}>     Мы всегда рядом</Text>

                    </View>
                    </LinearGradient>
                </View>
            </Swiper>
        )
}