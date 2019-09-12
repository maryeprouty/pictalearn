/**
 * Register screen
 */
import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import RegisterComponent from '../components/Register';
import { styles } from '../styles/styles';

export default class RegisterScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <ImageBackground source={require('../assets/logo.png')} style={ styles.logo }></ImageBackground>
                <RegisterComponent></RegisterComponent>
            </View>
        );
    }
}