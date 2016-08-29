import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  Text,
  Alert,
  AsyncStorage,
  Navigator,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import pokemon from '../utils/pokemons';
import ListItem from '../components/ListItem';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 62,
  },
  poke: {
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: 'pink' , 
    flexDirection: 'row',
    borderWidth: 2,
    height: 100,
    padding: 15,
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

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        AsyncStorage.setItem('position', JSON.stringify(position), () => {
          AsyncStorage.getItem('position', (err, result) => {
            console.log("!!!!!!!!!!!!!!", result);
          });
        });
      },
      (error) => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      console.log(position);
    });

  }

  renderScene = (route, navigator) => {
    switch (route.id) {
      case 'detail':
      console.log("!!!!!!!!!!!", route);
        return (
          <ListItem
            initialListSize={10}
            onPress={(string) => {
              Alert.alert(string);
            }}
            id={route.id}
            img={route.img}
            num={route.num}
            name={route.name}
            type={route.type}
            navigator={navigator}
          />
        );
        break;
      default:
        return (
          <View style={styles.container}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => {
                return <ListItem
                  initialListSize={10}
                  onPress={(string) => {
                    // Alert.alert(string);
                    navigator.push({...rowData, id: 'detail'});
                  }}
                  id={rowData.id}
                  img={rowData.img}
                  num={rowData.num}
                  name={rowData.name}
                  type={rowData.type}
                />;
              }}
            />
          </View>
        );
    }
  }

  render() {
    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                return (
                  <TouchableOpacity
                    style={{ flex: 1, justifyContent: 'center' }}
                    onPress={() => navigator.pop()}>
                    <Text>Back</Text>
                  </TouchableOpacity>
                );
              },
              RightButton: () => {},
              Title: (route, navigator, index, navState) => {
                return (
                  <View style={ styles.poke }>
                    <Text style={{ textAlign: 'center' , borderWidth: 20}}>
                      {route.name|| 'pokemon' }
                    </Text>
                    <TouchableOpacity>
                      <Text style={{ textAlign: 'center' }}>
                        { 'Attributes'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              },
            }}
             style={{ backgroundColor: 'lightblue' }}
          />
        }
      />
    );
  }
}
