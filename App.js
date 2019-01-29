import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginComponent from './app/screens/login/LoginComponent';
import HomeComponent from './app/screens/home/HomeComponent';
import RegisterComponent from './app/screens/RegisterComponent';

const MainStack = createStackNavigator({
    Register: {
        screen: RegisterComponent,
        navigationOptions: {
            header: null,
        }
    },
    Login: {
        screen: LoginComponent,
        navigationOptions: {
            header: null,
        },
    },
    Home: {
        screen: HomeComponent,
        navigationOptions: {
            header: null,
        }
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
