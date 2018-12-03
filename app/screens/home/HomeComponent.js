import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Linking,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class HomeComponent extends Component {
    onSuccess(e) {
        Linking
            .openURL(e.data)
            .catch(err => console.error('An error has occurred', err));
    }

    render() {
        return(
            <View>
                <Text>HomeComponent</Text>
                <QRCodeScanner
                    onRead={this.onSuccess.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
