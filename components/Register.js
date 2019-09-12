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

class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.saveData = this.saveData.bind(this);

        this.state = { email: '', password: '', firstname: '', lastname: '',
            loading: false, disabled: false }
    }

    static navigationOptions = () => ({
        headerTransparent: true,
        headerTitleStyle: {color: '#000000',
                          alignSelf: 'center',
                          textAlign: 'center',
                          flexGrow: 1}
      });

    // Save the user registration data to database
    saveData = () => {
        this.setState({ loading: true, disabled: true }, () =>
        {
            fetch('http://localhost:4200',
        {
            method: 'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
            {
                email: this.state.email,
 
                password: this.state.password
            })
 
        }).then((response) => response.json()).then((responseJson) =>
        {
            this.setState({ loading: false, disabled: false });

            //Successful registration, navigate home
            if (this.state.email != '' && this.state.password != '') {
                this.props.navigation.navigate("HomeScreen");
            } else {
                alert(responseJson);
            }
            
        }).catch((error) =>
        {
            console.error(error);
            this.setState({ loading: false, disabled: false });
        });
        });
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

            <TextInput underlineColorAndroid = "transparent" placeholder = "First name" style = { styles.textInput } 
                onChangeText = {(text) => this.setState({ firstname: text })}/>

            <TextInput underlineColorAndroid = "transparent" placeholder = "Last name" style = { styles.textInput } 
                onChangeText = {(text) => this.setState({ lastname: text })}/>        
 
            <TouchableOpacity disabled = { this.state.disabled } activeOpacity = { 0.8 } style = { styles.Btn } onPress = { this.saveData }>
                <Text style = { styles.btnText }>Register</Text>
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

export default withNavigation(RegisterComponent);