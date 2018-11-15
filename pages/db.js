import React, { Component } from 'react';
import { FlatList,StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const firebase = require('firebase');
require("firebase/firestore");
const fireBaseConfig = {
    apiKey: "AIzaSyAwwW3gIv6cSri6OgjR4n_CS5fC50J5Y_k",
    authDomain: "fitness-60624.firebaseapp.com",
    databaseURL: "https://fitness-60624.firebaseio.com",
    projectId: "fitness-60624",
    storageBucket: "fitness-60624.appspot.com",
    messagingSenderId: "549197752036"
};

const firebaseApp = firebase.initializeApp(fireBaseConfig);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true};
firestore.settings(settings);

export default class Db extends Component { 
  constructor() {
    super();
    this.ref = firestore.collection('Workouts');
    this.unsubscribe = null;
    this.state = {
	posts: [],
	workouts: [],
	loading: true,
    };
   }
  componentDidMount() {
	this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
	this.ref.doc("Stamina").collection("Exercise 1").get().then( (querySnapshot) => {
		querySnapshot.forEach( (doc) => {
			this.setState({
				workouts: [...this.state.workouts, doc.data().Title]})
			//console.log(doc.data().Title);
		});
	});
  }
  
  componentWillmount() {
     this.unsubscribe();
   }
   
   onCollectionUpdate = ( querySnapshot ) => {
	const posts = [];
	querySnapshot.forEach( (doc) => {
		const { title } = doc.data();
		posts.push({
			key: doc.id, //DOCUMENT ID
			doc, 	     // DOCUMENT SNAPSHOT
			title,
		});
	});
	this.setState({
		posts,
		loading: false,
	});
   }
  
	
  static navigationOptions = { header: null }
  render() { 
	StatusBar.setBarStyle('light-content', true);
	return (
		<ImageBackground source = {require('./bg.jpg')} style = {imageStyles.background} blurRadius = {85} >
			<View style = {{flex: 0,  marginTop: 40}} >
			<Text style ={{color: '#ffffff'}}> Hello </Text>
		
			</View >
		</ImageBackground >
	); 
   }
}

const imageStyles = StyleSheet.create({
  background: {
	width: '100%',
	height: '100%'
  }
});
