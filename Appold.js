import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native';
import { MaterialCommunityIcons, Feather, MaterialIcons} from '@expo/vector-icons'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[{flex: 1}]}>
		

	  <View style ={{flex: 1,flexDirection: 'row', justifyContent: 'center', backgroundColor: '#2f3230', marginTop: 30}}>
        	<Text style={{fontWeight: 'bold', fontSize: 33,color: '#ff0000'}}>Full Body Routine</Text>
	  </View>

	  <View style={{flex: 6, backgroundColor: '#aaaaaa'}}>
	    <WebView 
		javaScriptEnabled={true}
		source={{uri: 'https://www.youtube.com/embed/l0gDqsSUtWo?showinfo=0;' }}
	   />
	   </View>

	  <View style={{flex: 7, backgroundColor: '#2f3230'}}>
			<Text style={{fontWeight: 'bold',textAlign: 'center', fontSize: 24,color:'#ff8c00'}}>
				Steps
			</Text>
			<Text style={{fontWeight: 'bold', fontSize: 14,color:'#ff8c00'}}>
			{"\n"} • Do this {"\n"} • Do This {"\n"} • Do this 
			</Text>
	  </View>

	</View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 20,
    backgroundColor: '#2f3230',
  }, });
