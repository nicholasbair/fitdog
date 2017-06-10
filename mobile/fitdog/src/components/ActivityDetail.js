import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { deleteActivity } from '../actions';
import { Button, Card, CardSection } from './common';

class ActivityDetail extends Component {
  handleDeletePress() {
    this.props.deleteActivity(this.props.activity.id);
  }

  render() {
    const { name, duration } = this.props.activity;
    const thumbnail = 'http://via.placeholder.com/50x50';
    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: thumbnail }}
            />
          </View>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: thumbnail }}
            />
          </View>
        </CardSection>
        <CardSection>
          <Text>{duration} minute {name} with Rocko</Text>
        </CardSection>
        <CardSection>
          <Button>
            Edit
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleDeletePress.bind(this)}>
            Delete
          </Button>
        </CardSection>
      </Card>
    );
  }

}

const styles = {
  headerContentStyle: {
  flexDirection: 'column',
  justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 5
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default connect(null, { deleteActivity })(ActivityDetail);
