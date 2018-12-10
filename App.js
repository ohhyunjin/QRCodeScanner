import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginComponent from './app/screens/login/LoginComponent';
import HomeComponent from './app/screens/home/HomeComponent';

const MainStack = createStackNavigator({
    Login: {
        screen: LoginComponent,
        navigationOptions: {
            header: null,
        },
    },
    Home: {
        screen: HomeComponent,
    }
});

const MainContainer = createAppContainer(MainStack);

export default class App extends Component {
  render() {
      return(
          <MainContainer />
      )
  }
}
