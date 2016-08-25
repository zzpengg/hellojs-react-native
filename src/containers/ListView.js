import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Text,
  Alert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import pokemon from '../utils/pokemons';
import ListItem from '../components/ListItem';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class hellojs extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => {
        console.log(r1, r2);
        return r1 !== r2;
      }
    });
    this.state = {
      dataSource: ds.cloneWithRows(pokemon),
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return <ListItem
              initialListSize={10}
              onPress={(string) => {
                Alert.alert(string);
              }}
              id={rowData.id}
              img={rowData.img}
              num={rowData.num}
              name={rowData.name}
              type={rowData.type}
            />
          }}
        />
      </View>
    );
  }
}
