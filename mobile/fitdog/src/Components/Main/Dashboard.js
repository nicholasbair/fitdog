import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { white, blue, gray } from '../../styles/base';
import Button from '../Common/Button';
import TitleBar from '../Common/TitleBar';
import DogCard from './DogCard';

class Dashboard extends Component {
  componentDidMount() {
    // console.log(this.props);
    // console.log(this.props.activities);
  }

  renderDogs() {
    return this.props.dogs.map((dog) => {
      return (
        <DogCard key={dog.id} name={dog.name} img={dog.img} />
      );
    });
  }

  onPress(view) {
    this.props.navigator.push({ name: view });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <TitleBar title={'Dashboard'} />
        </View>
        <View style={styles.dataContainer}>
          {this.renderDogs()}
        </View>
        <View style={styles.buttonsContainer}>
          <Button text={'Add a dog'} onPress={() => this.onPress('AddDog')} />
          <Button text={'View dog'} onPress={() => this.onPress('DogDetail')} />
          <Button text={'Log an activity'} onPress={() => this.onPress('LogActivity')} />
          <Button text={'View an activity'} onPress={() => this.onPress('ActivityDetail')} />
          <Button text={'Account'} onPress={() => this.onPress('Account')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: white
  },
  titleContainer: {
    flex: 2
  },
  dataContainer: {
    flex: 5
  },
  buttonsContainer: {
    flex: 5
  }
});

function mapStateToProps(state) {
  return {
    dogs: state.dogs.dogs,
    activities: state.activities
  };
}

export default connect(mapStateToProps, null)(Dashboard);
