import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ActivityList from './components/ActivityList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          initial
        />
      </Scene>

      <Scene key="main">
        <Scene
          key="activityList"
          component={ActivityList}
          title="Activity Feed"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
