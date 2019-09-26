/**
 * Registration component
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput, 
  TouchableOpacity, 
  Alert
} from 'react-native';
import { styles } from '../styles/styles';
import { withNavigation } from 'react-navigation';

class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.saveData = this.saveData.bind(this);
        this.navigate = this.navigate.bind(this);

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

    // Navigate either to home page or login screen
    navigate = (screen, email) => {
        if (email != null) {
            this.props.navigation.navigate(screen, { userEmail: email });
        } else {
            this.props.navigation.navigate(screen);
        }
        
    }

    // Save the user registration data to database
    saveData = () => {
            fetch('http://localhost:4200/register.php', {
            method: 'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
            {
                email: this.state.email,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname
            })
 
        }).then((response) => response.json()).then((responseJson) =>
        {

            //Successful registration, navigate home
            if (responseJson === 'Success!') {
                this.navigate("HomeScreen", this.state.email);
            } else {
                Alert.alert(responseJson);
            }
            
        }).catch((error) =>
        {
            console.error(error);
        });
    }

    render() {
        return (

        // Registration form with email & password, first name & last name
        <View  style={ styles.container }>
            <TextInput autoCapitalize = 'none' underlineColorAndroid = "transparent" 
                placeholder = "Email" style = { styles.textInput } 
                onChangeText = {(text) => this.setState({ email: text })}
                clearButtonMode='always'/>
 
            <TextInput autoCapitalize = 'none' underlineColorAndroid = "transparent" 
                placeholder = "Password" secureTextEntry = {true} style = { styles.textInput } 
                onChangeText = {(text) => this.setState({ password: text })}
                clearButtonMode='always'/>

            <TextInput underlineColorAndroid = "transparent" placeholder = "First name" style = { styles.textInput } 
                onChangeText = {(text) => this.setState({ firstname: text })}
                clearButtonMode='always'/>

            <TextInput underlineColorAndroid = "transparent" placeholder = "Last name" style = { styles.textInput } 
                onChangeText = {(text) => this.setState({ lastname: text })}
                clearButtonMode='always'/>        
 
            <TouchableOpacity disabled = { this.state.disabled } activeOpacity = { 0.8 } style = { styles.Btn } onPress = { this.saveData }>
                <Text style = { styles.btnText }>Register</Text>
            </TouchableOpacity>

            
        </View>
        )
    };
}

export default withNavigation(RegisterComponent);