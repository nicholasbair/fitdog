import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Button from '../Common/Button';
import TitleBar from '../Common/TitleBar';

export default class AddDog extends Component {
  onAddDogPress() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <TitleBar title={'Add a dog'} />
        <Button text={'Add dog'} onPress={() => this.onAddDogPress()} />
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
