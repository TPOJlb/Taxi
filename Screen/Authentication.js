import React from 'react'
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native'
import AddInfo from '../AddInfoAndPhone';

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
                <AddInfo state = {this.state} navigate={navigate} page = {false}/>
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