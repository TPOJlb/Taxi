import React,{useState,useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView,Platform,Text,View, StyleSheet,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from "react-native-geocoding";





export default function WhereAreYouGoing({locat,setLocat,refContainer}) {
    Geocoder.init("AIzaSyDl64BEliK8_tgkLSycOiXIZKszLXS7goQ", {language : "ru"});
    console.log(locat);

    return (

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

                            })
                            .catch(error => console.warn(error));

                        console.log(locat);
                    }}
                    query={{
                        key: 'AIzaSyAmeaHFFepK5IAB_W8MMJp_V9cVmfUvrmE',
                        language: 'ru',
                    }}

                />
            </View>
    );

}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});