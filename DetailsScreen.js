import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,Button, TextInput,TouchableHighlight,Alert,} from 'react-native';
import { ListItem,CheckBox } from 'react-native-elements'
import {createStackNavigator } from 'react-navigation';


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

class DetailsScreen extends React.Component {

  constructor(props) {
   super(props);
   this.state = {
     text: 'New Item',
     data: ['shoes','purse'],
   };
 }



  render() {
    return (
      <View style={styles.container}>
      <View style={{marginTop: 20, height: 50, backgroundColor: 'powderblue', flex: 0.05, flexDirection: 'row'} }>
    <Button
onPress={() => {this.setState((prevState, props) => {
 var textBox = prevState.text
  if (textBox === 'New List') {
    textBox = 'New List' + i.toString
  }
 if (Boolean(textBox)) {
  return {data: [prevState.text].concat(prevState.data) };
}
})}}
title="+"
color="black"
/>
      <UselessTextInput
        multiline = {true}
        numberOfLines = {1}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      </View>

    <FlatList
      data= {this.state.data}
    renderItem={({item}) =>  
       <CheckBox
       title={item}
       checkedIcon='dot-circle-o'
       uncheckedIcon='circle-o'
       checked={this.state.checked}
     />
     }
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