import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import Signin from './Components/Auth/Signin';
import Signup from './Components/Auth/Signup';
import ActivityDetail from './Components/Main/ActivityDetail';
import AddDog from './Components/Main/AddDog';
import Dashboard from './Components/Main/Dashboard';
import DogDetail from './Components/Main/DogDetail';
import LogActivity from './Components/Main/LogActivity';
import Account from './Components/Account/Account';

import reducers from './reducers';

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

export default class Main extends Component {
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
