import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ActivityList from './components/ActivityList';
import ActivityDetail from './components/ActivityDetail';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          initial
          rightTitle="SignUp"
          onRight={() => Actions.signup()}
        />
        <Scene
          key="signup"
          component={SignupForm}
          title="Please Signup"
        />
      </Scene>

      <Scene key="main">
        <Scene
          key="activityList"
          component={ActivityList}
          title="Activity Feed"
        />
        <Scene
          key="activityDetail"
          component={ActivityDetail}
          title="Activity Detail"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
