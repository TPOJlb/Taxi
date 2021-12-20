import React from 'react';
import {ScrollView,SafeAreaView,Platform,Text,View, StyleSheet,TouchableOpacity,KeyboardAvoidingView,Image} from 'react-native';
import {CarB} from "../CarBase";
import { AntDesign } from '@expo/vector-icons';





export default function ChooseCar({listNam,setListNam,distan,setDistan,dura,setDura}) {

    return (
        <View style={{flex:1}}>
            <ScrollView style={{position: 'absolute',width: '80%', height: '18.5%',left:35,top: 552}}>{
                CarB.map(item => {
                    return(
                        <View key={item.key} style={{flex: 1, backgroundColor: 'white', width: '100%', height: 60,borderWidth:2,borderRadius:15,borderColor:'black',marginBottom:3}}>
                            <TouchableOpacity style={{flexDirection:'row',flex: 1,margin:3}} onPress={()=> {
                                alert("pidor you are welcome")
                                setListNam(listNam + 1)}}>
                                <Image source={item.image} style={{width: '20%', height: 54}}/>
                                <View style={{justifyContent:'center',flex:1}}>
                                <Text>  {item.name}</Text>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text>   </Text>
                                        <AntDesign name="star" size={7} color="black" />
                                        <Text style={{fontSize:8}}> {item.stars}</Text>
                                    </View>

                                </View>
                                <View style={{justifyContent:'center',alignItems:'flex-end',flex:1.5,flexDirection:'column'}}>
                                    <Text>Price {(item.price * distan).toFixed(2)} $   </Text>
                                    <Text style={{fontSize:8}}>distance : {distan} km, p/h = {item.price} $      </Text>
                                    <Text style={{fontSize:8}}>time to finish {dura|0} minut   </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                    }
                )
            }</ScrollView>
        </View>
    );
}
