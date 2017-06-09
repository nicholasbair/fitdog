import React, { Component } from 'react';
import { Text, TouchableOpacity, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

// Props
// {"activity":{"id":49,"name":"walk","duration":15,"user_id":19}}

 const ListItem = (props) => {
   const { name, duration } = props.activity;

  return (
    <View>
      <CardSection>
        <Text style={styles.titleStyle}>
          {name} {'->'} {duration}
        </Text>
      </CardSection>
    </View>
  );
};

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
