import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    StatusBar,
    StyleSheet,
} from 'react-native';
import firebase from 'react-native-firebase';

export default class RegisterComponent extends Component {
    state = {
        fullName: '',
        email: '',
        password: '',
        errorMessage: null,
    }

    handleSignup = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => this.props.navigation.navigate('Home'))
            .catch(error => this.setState({errorMessage: error.message}))
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.container}>
                <StatusBar hidden />
                <Text style={styles.header}>Register</Text>
                <Text>{this.state.errorMessage}</Text>
                <TextInput
                    style={styles.formItem}
                    placeholder='Full name'
                    onChangeText={fullName => this.setState({ fullName })}
                />
                <TextInput
                    style={styles.formItem}
                    placeholder='Email'
                    autoCapitalize='none'
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    style={styles.formItem}
                    placeholder='Password'
                    secureTextEntry
                    autoCapitalize='none'
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.handleSignup}
                >
                    <Text>Register</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontWeight: 'bold',
        fontSize: 40,
        bottom: 70,
    },
    formItem: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        width: 200,
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 50,
        borderRadius: 20,
        borderWidth: 1,
        width: 120,
        height: 50,
    }
});
