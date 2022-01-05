import React, {useState,useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30,fontFamily:'RobotoRegular'},
    codeFieldRoot: {marginTop: 20},
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
});

const CELL_COUNT = 6;

const Help = ({navigation,route}) => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const {code} = route.params



    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <LinearGradient
                colors={['#ff0066', '#cc6600']}
                style={styles.root}
            >
            <Text></Text>
            <Text></Text>
            <Text></Text>

            <Text style={styles.title}>Введите код из сообщения</Text>

                <Image
                    style={{width:100,height:100,position:'absolute',left:130,top:170}}
                    source={require('../Image/text-message.png')}
                />
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text><Text></Text><Text></Text>

            <CodeField

                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>

                )}
                />
            <Text></Text>
            <Text></Text>
            <Text></Text>
                <Text></Text>

            <TouchableOpacity style={{padding:10,justifyContent:'center',alignItems:'center',borderWidth:1 , marginRight:50,marginLeft:50,borderColor:'purple',backgroundColor:'purple',borderRadius:10}} onPress={()=>{
                if(value.toString()===code.toString()){
                alert('Пин-код верный')
                    navigation.navigate('LeftMenu',{location})}
            else{
                    alert('Пин-код не опознан')
                navigation.navigate('LeftMenu',{location})
                              }}}>
                <Text style={{fontFamily:'RobotoRegular',fontSize:22}}>Проверить</Text>
            </TouchableOpacity>
            </LinearGradient>

        </SafeAreaView>
    );
};

export default Help;