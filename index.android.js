/**
 * 
 *Double tap R on your keyboard to reload, Shake or press menu button for dev menu
 *
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import Component1 from './app/components/Component1/Component1';

export default class testApp extends Component {
  render() {
    return (
      <View>
          <Component2 />
      </View>
    );
  }
}


AppRegistry.registerComponent('testApp', () => testApp);
