/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  BackHandler
} from 'react-native';

import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf'


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
        currentScene: 'Login',
        phoneNumber: '',
        userPW: ''
    };
    this.onLoginPressed = this.onLoginPressed.bind(this);
    this.handleBackSignal = this.handleBackSignal.bind(this);
  }
  onLoginPressed(aNumber,aPw){
    this.setState({
      currentScene: 'Waiting',
      phoneNumber:aNumber,
      userPW:aPw
    });
  }

  handleBackSignal(){
    if (this.state.currentScene === 'Waiting') {
      this.setState({currentScene:'Login'});
      return true;
    }
  }

  render() {
    if (this.state.currentScene === "Login") {
        return <LoginLeaf onLoginPressed={this.onLoginPressed}/>;
    }else{
        return <WaitingLeaf phoneNumber={this.state.phoneNumber} userPW={this.state.userPW} onGoBackPressed={this.handleBackSignal}/>;
    }
    
  }

  componentDidMount(){
    if (Platform.os === "android") {
      BackHandler.addEventListener('hardwareBackPress',this.handleBackSignal);
    }
  }

  componentWillUnmount(){
    if (Platform.os === "android") {
      BackHandler.removeEventListener('hardwareBackPress',this.handleBackSignal);
    }
  }
}
