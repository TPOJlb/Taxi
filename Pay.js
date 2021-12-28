import React from 'react';
import {ScrollView,SafeAreaView,Platform,Text,View, StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';





export default function ChooseCar({listNam,setListNam,locat,setLocat}) {

    return (

        <View key={12334} style={{justifyContent: 'center',alignItems: 'center',position: 'absolute',width: '80%', height: '18.5%',left:35,top: 552}}
        >
            <TouchableOpacity onPress={()=> {
                setListNam(1)
                setLocat('')
            }}>
                <Text>
                Списание денег и поиск водителя...
                </Text>
            </TouchableOpacity>
        </View>
    );
}
