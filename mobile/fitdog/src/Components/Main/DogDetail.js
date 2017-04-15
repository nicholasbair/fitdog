import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Button from '../Common/Button';
import TitleBar from '../Common/TitleBar';

export default class DogDetail extends Component {
  onBackPress() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <TitleBar title={'View a dog'} />
        <Button text={'Back to dashboard'} onPress={() => this.onBackPress()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'white'
  }
});
