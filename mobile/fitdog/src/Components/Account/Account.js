import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { white } from '../../styles/base';
import Button from '../Common/Button';
import TitleBar from '../Common/TitleBar';

export default class Account extends Component {
  onUpdatePress() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <TitleBar title={'Account'} />
        <Button text={'Update'} onPress={() => this.onUpdatePress()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: white
  }
});
