import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
  handlePress() {
    Actions.activityDetail({ activity: this.props.activity });
  }

  render() {
    const { name, duration } = this.props.activity;

    return (
      <TouchableHighlight
        onPress={this.handlePress.bind(this)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name} {'->'} {duration}
            </Text>
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
  }
};

export default ListItem;
