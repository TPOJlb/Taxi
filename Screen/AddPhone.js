import React,{useRef } from 'react'
import {
    View,
    Text,
    StyleSheet, Image,
} from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import AddInfo from '../AddInfoAndPhone';
import { LinearGradient } from 'expo-linear-gradient';

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
            <View style={{flex: 1}}>
                <LinearGradient
                    colors={['#ff0066', '#cc6600']}
                    style={styles.container}
                >
                <View style={{justifyContent: 'center',alignItems: 'center',flex:0.5}}>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>

                <Image
                    style={{width:200,height:200}}
                    source={require('../Image/old-typical-phone.png')}
                />
                </View>
                <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
                    <Text></Text>
                    <Text></Text>

                <PhoneInput
                    ref={phoneInput}
                    defaultValue={this.props.value}
                    defaultCode="UA"
                    layout="first"
                    onChangeText={(text,val) => {
                        this.setState({ value: text });
                        this.onChangeText('phone', val);
                    }}
                    onChangeFormattedText={(text) => {
                        this.setState({ setFormattedValue: text });
                    }}
                    withDarkTheme={true}
                    withShadow={true}
                    autoFocus={false}
                    placeholder = 'Введите номер'
                    codeTextStyle = {{color:'white'}}
                    flagButtonStyle= {{borderRadius:10}}
                    countryPickerButtonStyle= {{borderRadius:10}}
                    textInputStyle= {{color:'white'}}
                    containerStyle= {{borderRadius:10,backgroundColor:'gray'}}
                    textContainerStyle= {{borderRadius:10,backgroundColor:'gray'}}
                />
                </View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                <AddInfo state = {this.state} navigate={navigate} page = {true}/>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    }
})