import React from 'react';
import {Button, StyleSheet, Text, View, WebView,StatusBar, ImageBackground, Image } from 'react-native';
import { AntDesign, Feather, MaterialIcons} from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { createStackNavigator } from 'react-navigation'
import HomeScreen  from './pages/Home.js'
import WorkoutPlan  from './pages/Workout.js'
import HistoryScreen  from './pages/History.js'

export default class App extends React.Component {
  render() {  
    return ( 
      <StackNav /> 
     );
   }
}

const StackNav = createStackNavigator({
	Home:    {screen: HomeScreen },
	Workout: {screen: WorkoutPlan },
	History: {screen: HistoryScreen},
});
