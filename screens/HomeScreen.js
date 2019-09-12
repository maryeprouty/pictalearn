/**
 * Home screen --> study sets display
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/styles';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text>PictaLearn</Text>
            </View>   
        );
    }
}