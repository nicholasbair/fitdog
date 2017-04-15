import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import Signin from './src/Components/Auth/Signin';
import Signup from './src/Components/Auth/Signup';
import ActivityDetail from './src/Components/Main/ActivityDetail';
import AddDog from './src/Components/Main/AddDog';
import Dashboard from './src/Components/Main/Dashboard';
import DogDetail from './src/Components/Main/DogDetail';
import LogActivity from './src/Components/Main/LogActivity';
import Account from './src/Components/Account/Account';

import reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const ROUTES = {
  Signin,
  Signup,
  Dashboard,
  ActivityDetail,
  AddDog,
  DogDetail,
  LogActivity,
  Account
};

export default class App extends Component {
  renderScene(route, navigator) {
    let Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator
        style={styles.container}
        initialRoute={{ name: 'Signin' }}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
        />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
