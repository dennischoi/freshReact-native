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
  Switch
} from 'react-native';


export default class Component2 extends Component {
	// State
	constructor(){
		super();
		this.state = {
			textValue: 'Hello',
			switchValue: false
		}
	}

	// Function
	onChangeText(value){
		this.setState({
			textValue: value
		});
	}

	onSubmit(){
		console.log("Submiting...")
	}

	onSwitchChange(value){
		this.setState({
			switchValue: value
		});
	}

	// Render onto DOM
 	render() {
 	   return (
 	    	<View style={ styles.mainContainer }>
 	     		<View style={ styles.subContainer }>
		      		<View style={ styles.textV1 }>
		      			<Text style={ styles.text }>First one</Text>
		      		</View>
		      		<View style={ styles.textV2 }>
		      			<Text style={ styles.text }>Second one</Text>
		      		</View>
		      		<View style={ styles.textV3 }>
		      			<Text style={ styles.text }>Third one</Text>
		      		</View>
		      		<View style={ styles.textV4 }>
		      			<Text style={ styles.text }>{ this.state.textValue }</Text>
		      		</View>
	  	   		</View>

	  	  		<View>
		  	   		<TextInput 
			     		placeholder="Enter Text"
			     		value={ this.state.textValue }
			     		onChangeText={ (value) => this.onChangeText(value) }
			     		onSubmitEditing={this.onSubmit}
			     	/>
	     		
	  	  		</View>

	  	  		<View>
	  	  			<Switch 
	  	  				value={ this.state.switchValue }
	  	  				onValueChange={ (value) => this.onSwitchChange(value) }
	  	  			/>
	  	  		</View>
  	    	</View>
  	  	);
 	} //Render
}

const styles = StyleSheet.create({

	mainContainer: {
		backgroundColor: '#dedede'
	},
	subContainer: {
		height: 100,
		flexDirection: 'row',
	},
	textV1: {
		flex: 1,
		backgroundColor: 'orange',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textV2: {
		flex: 1,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textV3: {
		flex: 1,
		backgroundColor: 'blue',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textV4: {
		flex: 1,
		backgroundColor: 'green',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: 'white',
		fontSize: 16,
	}
});

AppRegistry.registerComponent('Component2', () => Component2);
