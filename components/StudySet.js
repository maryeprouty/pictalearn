/**
 * A card representing a study set with title and number of words
 */
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from '../styles/styles';

import { mapStatesToProps } from 'react-fluxible';
import { UserManager } from '../model/UserManager';
// import { withNavigation } from 'react-navigation';

class StudySet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            hasBeenSet: false
        }
    }

    getUserName() {
        UserManager.getName(this.props.user.email).then(response => this.setState({name: response, hasBeenSet: true}));
    }

    componentDidMount() {
        // PROBLEM: can't access props here, only in render
        //this.getUserName();
    }

    render() {

        if (!this.state.hasBeenSet) {
            this.getUserName();
        }

        return (
            <Card containerStyle={styles.studySet}>
                <Text style={styles.studyText}>Welcome,</Text>
                <Text style={styles.studyText}>{this.state.name + '!'}</Text>
            </Card>
            
        );
    }
 }

export default mapStatesToProps(StudySet, state => {
    return {
      user: state.user,
      anotherState: state.anotherState
    };
});