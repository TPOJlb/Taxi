import React,{useRef } from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import AddInfo from '../AddInfoAndPhone';

export default class AddPhone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            phoneInput:'',
            setFormattedValue:'',
        };
    }
    state = {
        username: '', password: '', email: '',phone: ''
    }
    onChangeText = (key, val) => {
        this.setState({[key]: val})
    }

    render() {

        const phoneInput = useRef<PhoneInput>('');
        const navigate = this.props.navigation
        return (
            <View style={styles.container}>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={this.props.value}
                    defaultCode="DM"
                    layout="first"
                    onChangeText={(text,val) => {
                        this.setState({ value: text });
                        this.onChangeText('phone', val);
                    }}
                    onChangeFormattedText={(text) => {
                        this.setState({ setFormattedValue: text });
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                />
                <Text>    </Text>
                <AddInfo state = {this.state} navigate={navigate} page = {true}/>
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