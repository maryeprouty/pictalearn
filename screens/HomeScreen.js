/**
 * Home screen --> study sets display
 */
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../styles/styles';
import { mapStatesToProps } from 'react-fluxible';
import { updateStore } from 'fluxible-js';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    
    // Updates the email of the user currently using the app for persistence
    componentDidMount() {
        updateStore({
            user: {
                email: this.props.navigation.state.params.userEmail
            }
          });
    }

    // Returns user to login screen & updates store 
    logout = () => {
        updateStore({
            user: {
                email: 'Nobody'
            }
          });
        this.props.navigation.navigate('LoginScreen')
    }

    render() {
        return(
         <View style = { styles.container }>
            <Text> { this.props.user.email} </Text>
            <Button title="Logout" onPress={ this.logout } />
         </View>
      );
    }
}

export default mapStatesToProps(HomeScreen, state => {
    return {
      user: state.user
    };
  });