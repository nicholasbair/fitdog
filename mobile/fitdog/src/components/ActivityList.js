import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchActivities } from '../actions';
import { ListView, View, Text } from 'react-native';
import ListItem from './ListItem';

class ActivityList extends Component {
  componentWillMount() {
    this.props.fetchActivities();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ activities }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(activities);
  }

  renderRow(activity) {
    return (
      <ListItem activity={activity} />
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const { activities } = state;

  return { activities };
};

export default connect(mapStateToProps, { fetchActivities })(ActivityList);
