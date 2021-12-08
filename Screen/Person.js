import React,{useEffect,useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView, Text,View, StyleSheet,TouchableOpacity} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';

export default function Help() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

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
            <View style={styles.container}>
                <Text>{text}</Text>
            </View>
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});