import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default function ListItem(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => {
        props.onPress(`You click ${props.name}`);
      }}>
      <Image source={{ uri: props.img }} style={{ height: 100, width: 100 }} />
      <View style={styles.info}>
        <Text style={{ fontWeight: '500', fontSize: 20 }}>
          {props.num} {props.name}
        </Text>
        <Text>{props.type}</Text>
      </View>
    </TouchableOpacity>
  );
}

ListItem.propTypes = {
  id: React.PropTypes.string,
  img: React.PropTypes.string,
  num: React.PropTypes.string,
  name: React.PropTypes.string,
  type: React.PropTypes.string,
  onPress: React.PropTypes.func,
};

ListItem.defaultProps = {
  id: 0,
  img: '',
  num: '',
  name: '',
  type: '',
  onPress: () => {},
};
