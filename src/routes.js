import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Scene, Router } from 'react-native-router-flux';
import Hellojs from './containers/Hellojs';
import Hellojs2 from './containers/Hellojs2';
import ListView from './containers/ListView';
// const Router = connect()(RNRF.Router);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    // style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

class AppRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router getSceneStyle={getSceneStyle}>
        <Scene key="root" hideNavBar>
          <Scene key="Hellojs" component={Hellojs} title="Hellojs" />
          <Scene key="Hellojs2" component={Hellojs2} title="Hellojs2" />
          <Scene key="ListView" component={ListView} title="ListView" initial />
        </Scene>
      </Router>
    );
  }
}

export default connect()(AppRoutes);
