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

import Login from './app/components/Login/Login';

export default class testApp extends Component {
  render() {
    return (
      <View style={ styles.mainContainer }>
          <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1
  },

});


AppRegistry.registerComponent('testApp', () => testApp);
