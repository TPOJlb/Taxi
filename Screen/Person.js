import React,{useState,useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView,Platform,Text,View, StyleSheet,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from "react-native-geocoding";
import WhereAreYouGoing from "./WhereAreYouGoing";
import ChooseCar from '../MapSlide/ChooseCar';
import Pay from '../Pay';
import { Entypo } from '@expo/vector-icons';




export default function Person({route,navigation}) {
    const refContainer = useRef();
    const [dura,setDura] = useState(0)
    const [distan,setDistan] = useState(0)
    const [listNam,setListNam] = useState(1)
    const[locat,setLocat] = useState('');
    const origin = {latitude: route.params.location.coords.latitude, longitude: route.params.location.coords.longitude};
    Geocoder.init("AIzaSyDl64BEliK8_tgkLSycOiXIZKszLXS7goQ", {language : "ru"});
    return (
        <View style={StyleSheet.absoluteFillObject}>

            <MapView style={StyleSheet.absoluteFillObject} showsUserLocation={true} showsMyLocationButton={false} showsCompass={false} initialRegion={{
                latitude: route.params.location.coords.latitude,
                longitude: route.params.location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
                {(locat) ? ViewMap(locat,origin,refContainer,distan,setDistan,dura,setDura):null}
            </MapView>
            <View style={{flex:1,position: 'absolute',top: 30,left:10}}>
                <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                <Entypo name="menu" size={40} color="black" />
                </TouchableOpacity>
            </View>
            {(listNam === 1 ) ? <WhereAreYouGoing listNam={listNam} setListNam={setListNam} locat = {locat} setLocat = {setLocat} refContainer={refContainer}/> : null }
            {(listNam === 2 ) ? <ChooseCar listNam={listNam} setListNam={setListNam} distan={distan} setDistan = {setDistan} dura = {dura}  setDura={setDura}/> : null }
            {(listNam === 3 ) ? <Pay listNam={listNam} setListNam={setListNam} locat={locat} setLocat = {setLocat} /> : null }
        </View>
    );

}

function ViewMap(locat,origin,refContainer,distan,setDistan,dura,setDura){
    const GOOGLE_MAPS_APIKEY = 'AIzaSyBlSNY7Ypt3IOUrvQzsA2YY2JVNnXn_o94';
    const destination = {latitude: locat.lat, longitude: locat.lng};
    if(refContainer.length > 0){refContainer.current.clear()}
    return(
<View>
        <MapViewDirections
            lineDashPattern={[0]}
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={4}
            strokeColor="#111111"
            onReady={(result)=> {
                setDura(result.duration)
                setDistan(result.distance)}}
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