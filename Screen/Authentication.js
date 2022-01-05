import React from 'react'
import {
    View,
    TextInput,
    StyleSheet, Image,
} from 'react-native'
import AddInfo from '../AddInfoAndPhone';
import { LinearGradient } from 'expo-linear-gradient';

export default class Authentication extends React.Component {
    state = {
        username: '', password: '', email: '',phone: ''
    }
    onChangeText = (key, val) => {
        this.setState({[key]: val})
    }

    render() {
        const navigate = this.props.navigation

        return (
            <View style={{flex:1}}>
                <LinearGradient
                    colors={['#ff0066', '#cc6600']}
                    style={styles.container}
                >
                <Image
                    style={{marginBottom:30,width:250,height:250}}
                    source={require('../Image/inscription.png')}
                />
                <TextInput
                    style={styles.username}
                    placeholder='Имя пользователя'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <TextInput
                    style={styles.password}
                    placeholder='Пароль'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <TextInput
                    style={styles.email}
                    placeholder='Мыло'
                    autoCapitalize="none"
                    placeholderTextColor='white'
                    onChangeText={val => this.onChangeText('email', val)}
                />
                <AddInfo state = {this.state} navigate={navigate} page = {false}/>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    username: {
        width: 330,
        height: 40,
        backgroundColor: 'gray',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    password: {
        width: 330,
        height: 40,
        backgroundColor: 'gray',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    email: {
        width: 330,
        height: 40,
        backgroundColor: 'gray',
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