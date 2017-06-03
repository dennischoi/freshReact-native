import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

export default class Component1 extends Component {
	constructor(props){
		super(props);
		this.state = {
			valid: 'Valid',
			validity: false,
			message: this.props.message
		}
	}

	static defaultProps = {
		message: 'Default property message'
	}

  render() {
  		let valid = this.state.validity ? this.state.valid : 'Invalid';
    return (
      <View>
        <Text>{this.state.message}</Text>
        <Text>{valid}</Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('Component1', () => Component1);