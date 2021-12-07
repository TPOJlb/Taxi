import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AddInfo extends React.Component {
    state = {
        username: '', password: '', email: '',phone: ''
    }

    render() {

        return (
                <View>
                    <TouchableOpacity onPress={async () => {
                        const username = this.props.state.username
                        const password = this.props.state.password
                        const email = this.props.state.email
                        const phone = this.props.state.phone

                        try {
                            await AsyncStorage.multiSet([['name', username], ['password', password], ['email', email],['phone', phone]]);
                            const result = await AsyncStorage.multiGet(['name', 'password', 'email','phone'])
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
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})