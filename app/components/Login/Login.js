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
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView
  
} from 'react-native';
// Import other Components
import Header from '../Header/Header';
import LoginForm from './LoginForm';

export default class Login extends Component {
	// State
	constructor(){
		super();
		this.state = {

		}
	}

	// Function

	// Render onto DOM
 	render() {
 	   return (
 	    	<KeyboardAvoidingView behavior="padding" style={ styles.container }>
 	    		<View style={ styles.loginContainer }>
 	    			<Image 
 	    				style={ styles.logo }
 	    				source={ require('../../images/deadpool.png') }
 	    			/>
 	    			<Text style={ styles.logoText }>An app made by yours truly, friendly neighbourhood Deadpool!</Text>
 	    		</View>
 	    		<View style={ styles.formContainer }>
 	    			<LoginForm />
 	    		</View>
  	    	</KeyboardAvoidingView>
  	  	);
 	} //Render
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		backgroundColor: '#34495e'
	},
	loginContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		height: 120,
		width: 120
	},
	logoText: {
		color: '#fff',
		marginTop: 10,
		width: 160,
		textAlign: 'center',
		opacity: 0.9
	}

});

// AppRegistry.registerComponent('Login', () => Login);
