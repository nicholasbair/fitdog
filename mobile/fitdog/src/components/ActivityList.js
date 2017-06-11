import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { fetchActivities, fetchDogs } from '../actions';
import { Spinner } from './common';
import ListItem from './ListItem';

class ActivityList extends Component {
  componentWillMount() {
    this.props.fetchActivities();
    this.props.fetchDogs();

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

  renderList() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }

  render() {
    return this.renderList();
  }
}

const mapStateToProps = state => {
  const { activities, loading } = state.activities;

  return { activities, loading };
};

export default connect(mapStateToProps, { fetchActivities, fetchDogs })(ActivityList);
