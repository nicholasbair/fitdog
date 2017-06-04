import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import Signin from './src/Components/Auth/Signin';
// import Signup from './src/Components/Auth/Signup';
// import ActivityDetail from './src/Components/Main/ActivityDetail';
// import AddDog from './src/Components/Main/AddDog';
// import Dashboard from './src/Components/Main/Dashboard';
// import DogDetail from './src/Components/Main/DogDetail';
// import LogActivity from './src/Components/Main/LogActivity';
// import Account from './src/Components/Account/Account';

import reducers from './src/reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const SimpleApp = StackNavigator ({
  Signin: { screen: Signin }
});


// {/* <Provider store={store}> */}
// </Provider>


export default class App extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    return (
      <Signin />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
