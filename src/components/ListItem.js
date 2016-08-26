import React from 'react';
import { Platform } from 'react-native';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
const StyleSheet = require('../utils/F8StyleSheet');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'lightblue',
      },
    }),
  }
});

//import pokemons from '../utils/pokemons'

export default function ListItem(props) {
  return (
    <TouchableOpacity 
      style={styles.container}
      >
      <Image source={ { uri: props.img } } style={ { height: 100, width: 100 } } />
      <View style={ { flexDirection: 'column' } } >
        <Text style={ styles.name }>{ props.name }</Text>
        <Text>{ props.type }</Text>
      </View>
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  img: React.PropTypes.string,
  name: React.PropTypes.string,
  type: React.PropTypes.string,
};

ListItem.defaultProps = {
  img: '',
  name: '',
  type: '',
};
