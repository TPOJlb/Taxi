import React,{useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView,Platform,Text,View, StyleSheet,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from "react-native-geocoding";





export default function Help({route}) {
    Geocoder.init("AIzaSyDl64BEliK8_tgkLSycOiXIZKszLXS7goQ", {language : "ru"});

        const[locat,setLocat] = useState('')
    const origin = {latitude: route.params.location.coords.latitude, longitude: route.params.location.coords.longitude};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyBlSNY7Ypt3IOUrvQzsA2YY2JVNnXn_o94';

    return (
        <View style={StyleSheet.absoluteFillObject}>

            <MapView style={StyleSheet.absoluteFillObject} initialRegion={{
                latitude: route.params.location.coords.latitude,
                longitude: route.params.location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>



            </MapView>




    < View style={{width: '80%', height: '100%',left:35, position: 'absolute', top: 100}}>
                <GooglePlacesAutocomplete

                    placeholder='Search'
                    onPress={(data, details = null) => {
                        Geocoder.from(data.description)
                            .then(json => {
                                const location = json.results[0].geometry.location;
                                setLocat(location)
                            })
                            .catch(error => console.warn(error));
                        console.log(locat);
                        const destination = {latitude: locat.lat, longitude: locat.lng};
                        return (
                            <View>
                                <MapViewDirections
                                    lineDashPattern={[0]}
                                    origin={origin}
                                    destination={destination}
                                    apikey={GOOGLE_MAPS_APIKEY}
                                    strokeWidth={4}
                                    strokeColor="#111111"
                                />
                                <Marker coordinate={origin}/>
                                <Marker coordinate={destination}/>

                            </View>
                        );
                    }}
                    query={{
                        key: 'AIzaSyAmeaHFFepK5IAB_W8MMJp_V9cVmfUvrmE',
                        language: 'ru',
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});