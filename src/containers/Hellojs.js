import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import DefaultComponent from '../components/DefaultComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class ListView extends Component {
  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}