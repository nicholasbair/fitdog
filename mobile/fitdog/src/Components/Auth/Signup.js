import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import { white, blue, gray } from '../../styles/base';

import Button from '../Common/Button';

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  onPress() {
    this.setState({ password: '' });
    this.props.navigator.immediatelyResetRouteStack([{ name: 'Dashboard' }]);
  }

  onSigninPress() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign Up</Text>
        </View>

        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })}
        />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
        />

        <Button text={'Sign Up'} onPress={() => this.onPress()} />
        <Button text={'I have an account'} onPress={() => this.onSigninPress()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  titleContainer: {
    alignItems: 'center',
    backgroundColor: gray
  },
  title: {
    fontSize: 30,
    color: white
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
