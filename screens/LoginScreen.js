/**
 * Login screen
 */
import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import LoginComponent from '../components/Login';
import { styles } from '../styles/styles';

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/logo.png')} style={ styles.logo }></ImageBackground>
                <LoginComponent></LoginComponent>
            </View>
        );
    }
}