import React from 'react';
import {ScrollView,SafeAreaView,Platform,Text,View, StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';




export default function ChooseCar({listNam,setListNam,locat,setLocat}) {

    return (

        <View key={12334} style={{justifyContent: 'center',alignItems: 'center',position: 'absolute',width: '80%', height: '7%',left:35,top: 605}}
        >
            <LinearGradient
            colors={['#ff0066', '#cc6600']}
            style={{flex: 1,borderRadius:30,marginTop:10,padding:5,borderWidth:3,alignItems:'center',justifyContent:'center',borderColor:'green'}}

        >
            <TouchableOpacity onPress={()=> {
                setListNam(1)
                setLocat('')
            }}>
                <Text>
                Списание денег и поиск водителя...
                </Text>
            </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}
