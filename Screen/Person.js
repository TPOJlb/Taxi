import React,{useState,useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView,Platform,Text,View, StyleSheet,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from "react-native-geocoding";
import WhereAreYouGoing from "./WhereAreYouGoing";





export default function Help({route}) {
    const refContainer = useRef();
        const[locat,setLocat] = useState('');
    const origin = {latitude: route.params.location.coords.latitude, longitude: route.params.location.coords.longitude};
    Geocoder.init("AIzaSyDl64BEliK8_tgkLSycOiXIZKszLXS7goQ", {language : "ru"});


    return (
        <View style={StyleSheet.absoluteFillObject}>

            <MapView style={StyleSheet.absoluteFillObject} showsUserLocation={true}  initialRegion={{
                latitude: route.params.location.coords.latitude,
                longitude: route.params.location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
                {(locat) ? ViewMap(locat,origin,refContainer):null}
            </MapView>

            <WhereAreYouGoing locat = {locat} setLocat = {setLocat} refContainer={refContainer}/>
        </View>
    );

}

function ViewMap(locat,origin,refContainer){
    const GOOGLE_MAPS_APIKEY = 'AIzaSyBlSNY7Ypt3IOUrvQzsA2YY2JVNnXn_o94';
    const destination = {latitude: locat.lat, longitude: locat.lng};
    {refContainer.current.clear()}
    return(
<View>
        <MapViewDirections
            lineDashPattern={[0]}
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor="#111111"
        />
    <Marker coordinate={destination}/>
</View>

);
}
const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});