import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Header = props => (
  <View style={ styles.headerContainer }>
    <TouchableWithoutFeedback onPress={ () => props.toggle() }>
      <Icon 
        name='bars'
        color='white'
        size={ 25 }
      />
    </TouchableWithoutFeedback>
    <Image style={ styles.headerLogo } source={ require('../../images/deadpool.png') } />
    <Icon 
      name='search'
      color='white'
      size={ 25 }
    />
  </View>
)

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  headerLogo: {
    width: 60,
    height: 60
  }
})

// export when exporting object/prop
export default Header
