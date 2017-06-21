import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { deleteActivity, showEditActivity } from '../actions';
import { Button, Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ActivityDetail extends Component {
  handleDeletePress() {
    this.props.deleteActivity(this.props.activity.id);
  }

  handleEditPress() {
    const { activity } = this.props;

    this.props.showEditActivity({ activity });
  }

  renderButtons() {
    const { user, activity } = this.props;
    if (user.id === activity.user_id) {
      return (
        <View>
          <CardSection>
            <Button onPress={this.handleEditPress.bind(this)}>
              Edit
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={this.handleDeletePress.bind(this)}>
              Delete
            </Button>
          </CardSection>
        </View>
      );
    }
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
        {this.renderButtons()}
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

const mapStateToProps = state => {
  const { user } = state.auth;

  return { user };
};

export default connect(mapStateToProps, { deleteActivity, showEditActivity })(ActivityDetail);
