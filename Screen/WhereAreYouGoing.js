import React,{useState,useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView,Platform,Text,View, StyleSheet,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from "react-native-geocoding";
import ChooseCar from "../MapSlide/ChooseCar";
import { LinearGradient } from 'expo-linear-gradient';





export default function WhereAreYouGoing({listNam,setListNam,locat,setLocat,refContainer}) {

    const [open,setOpen] = useState('')

    Geocoder.init("AIzaSyDl64BEliK8_tgkLSycOiXIZKszLXS7goQ", {language : "ru"});
    return (
        <View key={12334} style={{flex:1}}>
            < View style={{position: 'absolute',width: '80%', height: '100%',left:35,  top: 100}}>
                <GooglePlacesAutocomplete
                    fetchDetails={true}
                    ref={refContainer}
                    placeholder='Куда Хочешь?'
                    enablePoweredByContainer={false}
                    onPress={(data, details = null) => {
                        Geocoder.from(data.description)
                            .then(json => {
                                const location = json.results[0].geometry.location;
                                setLocat(location)
                                setOpen(1)
                            })
                            .catch(error => console.warn(error));

                    }}
                    query={{
                        key: 'AIzaSyAmeaHFFepK5IAB_W8MMJp_V9cVmfUvrmE',
                        language: 'ru',
                    }}

                />
            </View>
        <View style={{position: 'absolute',width: '50%', height: '7%',left:85,top: 155,justifyContent:'center',alignItems:'center'}}>

            {(open === '') ? <Text> </Text> :<TouchableOpacity style={{backgroundColor:'green',padding:10,borderRadius:15}} onPress={() => setListNam(listNam + 1)}>
                <Text style={{color: 'white'}}>
                    Выбрать автомобиль
                </Text>
            </TouchableOpacity>
           }

        </View>
        </View>
    );

}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});