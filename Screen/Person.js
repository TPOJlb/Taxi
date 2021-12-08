import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default function Help() {

    const origin = {latitude: 37.3318456, longitude: -122.0296002};
    const destination = {latitude: 37.771707, longitude: -122.4053769};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyBlSNY7Ypt3IOUrvQzsA2YY2JVNnXn_o94';






    return (


        <MapView style={{height:'100%',width:'100%'}}  initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}>

            <MapViewDirections
                lineDashPattern={[0]}
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={4}
                strokeColor="#111111"
            />
            <Marker coordinate={origin} />
            <Marker coordinate={destination} />


        </MapView>


    );
}