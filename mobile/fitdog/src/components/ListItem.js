import React, { Component } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  handlePress() {
    Actions.activityDetail({ activity: this.props.activity });
  }

  render() {
    const thumbnail = 'http://via.placeholder.com/50x50';
    const { name, duration } = this.props.activity;

    return (
      <TouchableHighlight
        onPress={this.handlePress.bind(this)}
      >
        <View>
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
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
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

export default ListItem;
