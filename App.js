import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,Button, TextInput,TouchableHighlight,} from 'react-native';
import { List,ListItem } from 'react-native-elements'
var i = 0;

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {35}
      />
    );
  }
}


export default class ListsScreen extends Component {

  constructor(props) {
   super(props);
   this.state = {
     text: 'New List',
     data: ['shopping','reading'],
   };

 }
/*
_renderItem = ({item}) => {

//  <TouchableHighlight onPress={this._onSelectList}>

  <Text style={styles.item}>{item}</Text>
  // <ListItem
     title = {'hi'}
   />
   // </TouchableHighlight>
}

// _onSelectList = (list) => {
//   return {alert('hi')}
// }
*/


  render() {
    return (
      <View style={styles.container}>
      <View style={{marginTop: 20, height: 50, backgroundColor: 'powderblue', flex: 0.05, flexDirection: 'row'} }>
    <Button
onPress={() => {this.setState((prevState, props) => {
//  var textBox = prevState.text
  // if (textBox === 'New List') {
  //   textBox = 'New List' + i.toString
  // }
//  if (Boolean(textBox)) {
  return {data: [prevState.text].concat(prevState.data) };
//}
})}}
title="+"
color="black"
/>
      <UselessTextInput
        multiline = {true}
        numberOfLines = {4}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      </View>

    <FlatList
      data= {this.state.data}
      renderItem = {({item}) => { <Text style={styles.item}>{item}</Text>}}
      keyExtractor={(item, index) => index.toString()}
    />
  </View>

    );

  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

})

//skip this line if using Create React Native App
AppRegistry.registerComponent('todo', () => ListsScreen);
