import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class LoginForm extends Component {
	constructor(){
		super();
		this.state = {
		}
	}


  render() {
    return (
      <View style={ styles.container }>
        <TextInput
          placeholder="Username"
          style={ styles.input }
        />
        <TextInput
          placeholder="Password"
          style={ styles.input }
        />

        <TouchableOpacity style={ styles.buttonContainer }>
          <Text style={ styles.buttonText }>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 20,
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2c3e50', 
    paddingVertical: 15
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  }

});


// AppRegistry.registerComponent('LoginForm', () => LoginForm);