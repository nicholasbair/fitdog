import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { white, gray } from '../../styles/base';
import Button from '../Common/Button';

export default class TitleBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: gray
  },
  title: {
    fontSize: 30,
    color: white
  }
});
