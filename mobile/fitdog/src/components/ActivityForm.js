import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import CheckBox from 'react-native-checkbox';
import {
  activityNameChanged,
  activityDurationChanged,
  activityAddDog,
  activityRemoveDog,
  addActivity
} from '../actions';
import { Card, CardSection, Input, Button } from './common';

class ActivityForm extends Component {
  onNameChange(text) {
    this.props.activityNameChanged(text);
  }

  onDurationChange(text) {
    this.props.activityDurationChanged(text);
  }

  onDogChange(id) {
    if (this.props.selectedDogs.includes(id)) {
      this.props.activityRemoveDog(id);
    } else {
      this.props.activityAddDog(id);
    }
  }

  onButtonPress() {
    const { name, duration, selectedDogs } = this.props;
    this.props.addActivity({ name, duration, dogs: selectedDogs });
  }

  renderDogs() {
    return this.props.dogs.map(dog =>
      <CheckBox
        key={dog.id}
        label={dog.name}
        checked={this.props.selectedDogs.includes(dog.id)}
        onChange={() => this.onDogChange(dog.id)}
      />
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="walk"
            onChangeText={this.onNameChange.bind(this)}
            value={this.props.name}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Duration"
            placeholder="20"
            onChangeText={this.onDurationChange.bind(this)}
            value={this.props.duration}
          />
        </CardSection>
        <CardSection>
          <View style={{ marginLeft: 18 }}>
            {this.renderDogs()}
          </View>
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add Activity
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  const { name, duration, dogs: selectedDogs, error } = state.activityForm;
  const { dogs } = state.dogs;

  return { name, duration, selectedDogs, error, dogs };
};

export default connect(mapStateToProps, {
  activityNameChanged,
  activityDurationChanged,
  activityAddDog,
  activityRemoveDog,
  addActivity
})(ActivityForm);
