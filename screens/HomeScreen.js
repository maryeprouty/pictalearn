/**
 * Home screen --> study sets display
 */
import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../styles/styles';
import Icon from 'react-native-vector-icons/AntDesign';

import { mapStatesToProps } from 'react-fluxible';
import { updateStore } from 'fluxible-js';

import StudySet from '../components/StudySet';

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    // Title and add button for study sets
    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            title: 'Study Sets',
            headerRight: (
                <TouchableOpacity onPress = { () => Alert.alert('Adding a new study set...') }>
                    <Icon name='plus' size={24} style={styles.headerButton}></Icon>
                </TouchableOpacity> 
            ),
            headerLeft: (
                <Button title="Logout" style={styles.headerButton} onPress={ params.handleLogout } />
            )
        }    
      };
    
    // Updates the email of the user currently using the app for persistence
    componentDidMount() {
        updateStore({
            user: {
                email: this.props.navigation.state.params.userEmail
            }
        });

        // Allows logout to happen in navbar
        this.props.navigation.setParams({ handleLogout: this.logout })
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
         <View>
            <StudySet></StudySet>
         </View>
      );
    }
}

export default mapStatesToProps(HomeScreen, state => {
    return {
      user: state.user
    };
});