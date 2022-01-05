import React from 'react';
import {
    View,
    Text,
    TouchableOpacity, Image,Alert,
} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";


export default class AddInfo extends React.Component {
    state = {
        username: '', password: '', email: '',phone: ''
    }



    render() {

        if(this.props.page === false) {

            return (
                <View>
                    <Text></Text>
                    <Text></Text>

                    <TouchableOpacity onPress={async () => {
                        const username = this.props.state.username
                        const password = this.props.state.password
                        const email = this.props.state.email


                        try {
                            await AsyncStorage.multiSet([['name', username], ['password', password], ['email', email]]);
                            const result = await AsyncStorage.multiGet(['name', 'password', 'email'])
                            this.props.navigate.navigate('AddPhone')
                        } catch (err) {
                            console.log('error signing up: ', err)
                        }
                    }}>
                        <Image
                            style={{width:170,height:55}}
                            source={require('./Image/registration-removebg-preview.png')}
                        />
                    </TouchableOpacity>
                </View>
            );
        }else{

            return (

                <View>

                    <TouchableOpacity onPress={async () => {
                        const phone = this.props.state.setFormattedValue
                        const code = (Math.round(Math.random() * (999999 - 100000) + 100000))
                        try {
                            await AsyncStorage.setItem('phone', phone);
                            const result = await AsyncStorage.multiGet(['name', 'password', 'email','phone'])
                            console.log(result);
                            Alert.alert(
                                "Ваш пин-код",
                                ""+code,
                                [
                                    {
                                        text: ""
                                    },

                                    { text: "OK", style: 'OK',}
                                ])
                            this.props.navigate.navigate('Help',{code: code})
                        } catch (err) {
                            console.log('error signing up: ', err)
                        }
                    }}>

                        <Image
                            style={{width:170,height:55}}
                            source={require('./Image/registration-removebg-preview.png')}
                        />
                    </TouchableOpacity>

                </View>

            );
        }

    }
}

