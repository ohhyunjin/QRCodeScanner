import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Linking,
    StatusBar,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    onSuccess(e) {
        // alert(e.data);
        this.state.count + 1 === 2 ? alert('Free Coffee!') : null;
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return(
            <View>
                <StatusBar hidden />
                <View>
                    // The scanner will be inactive after one scan.
                    <QRCodeScanner
                        onRead={this.onSuccess.bind(this)}
                        showMarker={true}
                        checkAndroid6Permissions={true}
                    />
                </View>
                <View style={styles.counterContainer}>
                    <Text>{this.state.count}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    counterContainer: {
        flex: 1,
        position: 'absolute',
        top: 500,
    },
});
