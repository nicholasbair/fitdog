import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

import { white, blue } from '../../styles/base';

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={'gray'}
        onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: blue,
    marginTop: 10,
    backgroundColor: blue
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20,
    color: white
  }
});
