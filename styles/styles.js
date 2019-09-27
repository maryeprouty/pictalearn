/**
 * Global stylesheet
 */

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },
 
    textInput: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 5,
        alignSelf: 'stretch',
        padding: 8,
        fontSize: 16,
    },
 
    Btn: {
        backgroundColor: '#5c1f4b',
        alignSelf: 'stretch',
        padding: 10,
        marginTop: 10,
        marginBottom: 25
    },
 
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    },

    logo: {
        width: '100%',
        height: '60%',
        alignSelf: 'center',
        paddingTop: 40,
        marginTop: 40

    },

    signUpText: {
        color: 'dodgerblue',
    },

    studySet: {
        backgroundColor: '#ddd09a',
        borderColor: 'black',
        width: '80%',
        height: 150,
        alignSelf: 'center',
        borderRadius: 20,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },

    studyText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '500',
    },

    headerButton: {
        color: 'dodgerblue',
        marginLeft: 20,
        marginRight: 20,
    }
});