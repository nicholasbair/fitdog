import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import CheckBox from 'react-native-checkbox';
import {
  activityNameChanged,
  activityDurationChanged,
  activityDogsChanged,
  addActivity
} from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class ActivityForm extends Component {
  onNameChange(text) {
    this.props.activityNameChanged(text);
  }

  onDurationChange(text) {
    this.props.activityDurationChanged(text);
  }

  onDogsChange(text) {
    this.props.activityDogsChanged(text);
  }

  onButtonPress() {
    const { name, duration, dogs } = this.props;
    this.props.addActivity({ name, duration, dogs });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Add Activity
      </Button>
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
          <Input
            label="Dogs"
            placeholder="Fiddo"
            onChangeText={this.onDogsChange.bind(this)}
            value={this.props.dogs}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
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
  const { name, duration, dogs, error } = state.activityForm;

  return { name, duration, dogs, error };
};

export default connect(mapStateToProps, {
  activityNameChanged,
  activityDurationChanged,
  activityDogsChanged,
  addActivity
})(ActivityForm);
