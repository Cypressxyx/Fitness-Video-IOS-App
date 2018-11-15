import React, { Component } from 'react';
import {Button, StyleSheet, Text, View, WebView,StatusBar, ImageBackground, Image } from 'react-native';
import { AntDesign, Feather, MaterialIcons} from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null 
  }
  render() {  
    StatusBar.setBarStyle('light-content',true); 
    return ( 
	<ImageBackground source={require('./bg.jpg')} style={imageStyles.background} blurRadius={85}>

	<View style={{flex: 1,justifyContent: 'center', alignContent: 'center'}}>
		<Button 
			title="History"
			color="#ffffff"
			onPress={ () => this.props.navigation.navigate('History')}
		/>
		<Button 
			title="PreMade"
			color="#ffffff" 
			onPress={ () => this.props.navigation.navigate('Workout')}
		/>
		<Button 
			title="Database Example"
			color="#ffffff" 
			onPress={ () => this.props.navigation.navigate('db')}
		/>
		
		
     	</View> 
      </ImageBackground>

    ); 
  }
}

export default HomeScreen;

const imageStyles = StyleSheet.create({
	background: {
		width: '100%',
		height: '100%'
	}
});
