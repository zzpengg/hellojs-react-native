import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import pokemon from '../utils/pokemons';
import ListItem from '../components/ListItem';


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
  render() {
    return (
      <View style={styles.container}>
        <ListItem />
      </View>
    );
  }
}
