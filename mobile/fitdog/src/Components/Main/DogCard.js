import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { white, blue, gray } from '../../styles/base';
import Button from '../Common/Button';
import TitleBar from '../Common/TitleBar';

export default class DogCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Image style={styles.image} source={{uri: '../../../public/rocko.jpeg'}} />
          <Text>{this.props.name}</Text>
        </View>
        <View style={styles.graph}>
          <Text>GRAPH</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderColor: blue,
    borderWidth: 2
  },
  avatar: {
    borderColor: 'red',
    borderWidth: 2,
    flex: 2
  },
  graph: {
    borderColor: 'black',
    borderWidth: 2,
    flex: 5
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50
  }
});
