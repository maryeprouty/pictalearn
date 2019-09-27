/**
 * A card representing a study set with title and number of words
 */
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from '../styles/styles';

import { mapStatesToProps } from 'react-fluxible';
// import { withNavigation } from 'react-navigation';

class StudySet extends Component {

    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            <Card containerStyle={styles.studySet}>
                <Text style={styles.studyText}>Welcome</Text>
                <Text style={styles.studyText}>{this.props.user.email}</Text>
            </Card>
            
        );
    }
 }

export default mapStatesToProps(StudySet, state => {
    return {
      user: state.user
    };
});