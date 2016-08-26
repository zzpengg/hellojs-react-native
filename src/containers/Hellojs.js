import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import DefaultComponent from '../components/DefaultComponent';
import ListItem from '../components/ListItem';
import pokemons from '../utils/pokemons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


export default class hellojs extends Component {
  constructor(props){
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(pokemons),
    };
  }
  
  
  render() {
    return (
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={(rowData) => {
          return (
            <ListItem img={rowData.img} name={rowData.name} type={rowData.type} />
          );
        }}
      />
    );
  }
}
