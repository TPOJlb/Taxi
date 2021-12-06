import React from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Authentication extends React.Component {
    state = {
        username: '', password: '', email: ''
    }
    onChangeText = (key, val) => {
        this.setState({[key]: val})
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('email', val)}
                />
                <View>
                <TouchableOpacity onPress={async () => {
                    const { username, password, email} = this.state
                    try {
                        await AsyncStorage.multiSet([['name', username], ['password', password], ['email', email]]);
                        const result = await AsyncStorage.multiGet(['name', 'password','email'])
                        console.log(result);
                        this.props.navigation.navigate('Swiper')

                    } catch (err) {
                        console.log('error signing up: ', err)
                    }
                }}>
                    <Text>Зарегестрировать новый аккаунт</Text>
                </TouchableOpacity>
              </View>

            </View>
        )
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