/**
 * Registration component
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator, 
  Platform,
} from 'react-native';
import { styles } from '../styles/styles';
import { withNavigation } from 'react-navigation';

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);

        this.state = { email: '', password: '', loading: false, disabled: false }
    }

    static navigationOptions = () => ({
        headerTransparent: true,
        headerTitleStyle: {color: '#000000',
                          alignSelf: 'center',
                          textAlign: 'center',
                          flexGrow: 1}
      });

    // Navigate either to home page or register screen
    navigate = (screen) => {
        this.props.navigation.navigate(screen);
    }


    render() {
        return (

        // Registration form with email & password
        <View  style={ styles.container }>
            <TextInput autoCapitalize = 'none' underlineColorAndroid = "transparent" 
                placeholder = "Email" style = { styles.textInput } 
                onChangeText = {(text) => this.setState({ email: text })}/>
 
            <TextInput autoCapitalize = 'none' underlineColorAndroid = "transparent" 
                placeholder = "Password" secureTextEntry = {true} style = { styles.textInput } 
                onChangeText = {(text) => this.setState({ password: text })}/>
 
            <TouchableOpacity disabled = { this.state.disabled } activeOpacity = { 0.8 } style = { styles.Btn } onPress = { () => this.navigate("HomeScreen") }>
                <Text style = { styles.btnText }>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = { () => this.navigate("RegisterScreen") }>
                <Text style = { styles.signUpText }>Don't have an account yet? Sign up.</Text>
            </TouchableOpacity>

            
 
            {/* Displays activity indicator while loading */}
            {
                (this.state.loading)
                ?
                    (<ActivityIndicator size = "large" />)
                :
                    null
            }
            
        </View>
        )
    };
}

export default withNavigation(LoginComponent);