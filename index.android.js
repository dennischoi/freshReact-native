/**
 * 
 *Double tap R on your keyboard to reload, Shake or press menu button for dev menu
 *
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet
} from 'react-native';

import App from './app/components/App';

export default class testApp extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('testApp', () => testApp);
