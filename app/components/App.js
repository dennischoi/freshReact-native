import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  AppRegistry
} from 'react-native';

import SideMenu from 'react-native-side-menu';

import Header from './Header/Header';
import Menu from './Header/Menu';
import Slider from './Header/Slider';
import List from './Header/List';
import Login from './Login/Login';



export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			isOpen: false
		}
	}

	// Function
	toggle(){
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	updateMenu(isOpen){
		this.setState({isOpen})
	}

  render() {
    return (
      <View style={ styles.mainContainer }>
    		<Header toggle={ this.toggle.bind(this) }/>
        <SideMenu
          menu={ <Menu /> }
          isOpen={ this.state.isOpen }
          onChange={ (isOpen) => this.updateMenu(isOpen) }
        >
      		<Slider />
      		<List />
      	</SideMenu>
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

