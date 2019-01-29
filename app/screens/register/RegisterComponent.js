import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    StatusBar,
} from 'react-native';

export default class RegisterComponent extends Component {
    render() {
        return(
            <KeyboardAvoidingView style={styles.container}>
                <StatusBar hidden />
                <Text style={styles.header}>Register</Text>
                <TextInput
                    style={styles.formItem}
                    placeholder='Full name'
                />
                <TextInput
                    style={styles.formItem}
                    placeholder='Email'
                />
                <TextInput
                    style={styles.formItem}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => alert('Register complete!')}
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
