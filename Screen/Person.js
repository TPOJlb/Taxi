import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView, Text,View, StyleSheet,TouchableOpacity} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';




export default function Help({route}) {

    console.log(route.params.location.coords);
    // const origin = {latitude: location.locate.coords.latitude, longitude: location.locate.coords.longitude};
    //  const destination = {latitude: 37.771707, longitude: -122.4053769};
    // const GOOGLE_MAPS_APIKEY = 'AIzaSyBlSNY7Ypt3IOUrvQzsA2YY2JVNnXn_o94';




    return (


        <MapView style={{height:'100%',width:'100%'}}  initialRegion={{
            latitude: route.params.location.coords.latitude,
            longitude: route.params.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}>

            {/*<MapViewDirections*/}
            {/*    lineDashPattern={[0]}*/}
            {/*    origin={origin}*/}
            {/*    destination={destination}*/}
            {/*    apikey={GOOGLE_MAPS_APIKEY}*/}
            {/*    strokeWidth={4}*/}
            {/*    strokeColor="#111111"*/}
            {/*/>*/}
            {/*<Marker coordinate={origin} />*/}
            {/*<Marker coordinate={destination} />*/}


        </MapView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});