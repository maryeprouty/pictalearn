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

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
        this.login = this.login.bind(this);

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
    navigate = (screen, email) => {
        if (email != null) {
            this.props.navigation.navigate(screen, { userEmail: email });
        } else {
            this.props.navigation.navigate(screen);
        }
        
    }

    // Log the user into PictaLearn
    login = () => {

       fetch('http://localhost:4200/login.php', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
        
           email: this.state.email,
           password: this.state.password
        
         })
        
       }).then((response) => response.json())
             .then((responseJson) => {
                 console.log(responseJson);
       
               // If server response message same as Data Matched
              if (responseJson === 'Data Matched') {
                   //Then open HomeScreen ...and send user email to HomeScreen
                   this.navigate('HomeScreen', this.state.email);
                   this.setState({
                       email: '',
                       password: ''
                   });
               } else{
                 Alert.alert(responseJson);
               }
       
             }).catch((error) => {
               console.error(error);
             });
        
         }

    render() {
        return (

        // Login form with email & password
        <View style={ styles.container }>
            <TextInput autoCapitalize = 'none' underlineColorAndroid = "transparent" 
                placeholder = "Email" style = { styles.textInput } 
                onChangeText = {(text) => this.setState({ email: text })}
                value={this.state.email}
                clearButtonMode = 'always'/>
 
            <TextInput autoCapitalize = 'none' underlineColorAndroid = "transparent" 
                placeholder = "Password" secureTextEntry = {true} style = { styles.textInput } 
                onChangeText = {(text) => this.setState({ password: text })}
                value={this.state.password}
                clearButtonMode='always'/>
 
            <TouchableOpacity disabled = { this.state.disabled } activeOpacity = { 0.8 } style = { styles.Btn } onPress = { () => this.login() }>
                <Text style = { styles.btnText }>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = { () => this.navigate("RegisterScreen") }>
                <Text style = { styles.signUpText }>Don't have an account yet? Sign up.</Text>
            </TouchableOpacity>
            
        </View>
        )
    };
}

export default withNavigation(LoginComponent);