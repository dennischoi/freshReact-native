import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AppRegistry
} from 'react-native';

import Header from './Header/Header';
import Login from './Login/Login';



export default class App extends Component {
  render() {
    return (
      <View style={ styles.mainContainer }>
      	<Header />
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
AppRegistry.registerComponent('App', () => App);

