import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
    ActivityIndicator,
    TextInput,
} from 'react-native';
import PropTypes from 'prop-types';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.header}>Welcome!</Text>
                <TextInput
                    style={styles.formItem}
                    placeholder='Email'
                />
                <View style={{ height: 20 }} />
                <TextInput
                    style={styles.formItem}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Text>Login</Text>
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
