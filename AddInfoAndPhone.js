import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
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
                    <TouchableOpacity onPress={async () => {
                        const username = this.props.state.username
                        const password = this.props.state.password
                        const email = this.props.state.email


                        try {
                            await AsyncStorage.multiSet([['name', username], ['password', password], ['email', email]]);
                            const result = await AsyncStorage.multiGet(['name', 'password', 'email'])
                            console.log(result);
                            this.props.navigate.navigate('AddPhone')
                        } catch (err) {
                            console.log('error signing up: ', err)
                        }
                    }}>
                        <Text>Зарегестрировать новый аккаунт</Text>
                    </TouchableOpacity>
                </View>
            );
        }else{

            return (
                <View>
                    <TouchableOpacity onPress={async () => {
                        const phone = this.props.state.setFormattedValue
                        const code = Math.round(Math.random() * (999999 - 100000) + 100000)
                        try {
                            await AsyncStorage.setItem('phone', phone);
                            const result = await AsyncStorage.multiGet(['name', 'password', 'email','phone'])
                            console.log(result);
                            alert(code);
                            this.props.navigate.navigate('Help',{code: code})
                        } catch (err) {
                            console.log('error signing up: ', err)
                        }
                    }}>
                        <Text>Зарегестрировать новый аккаунт</Text>
                    </TouchableOpacity>
                </View>
            );
        }

    }
}

