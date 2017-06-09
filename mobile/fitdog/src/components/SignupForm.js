import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged, passwordChanged, emailChanged, signupUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class SignupForm extends Component {
  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onButtonPress() {
    const { username, password, email } = this.props;
    this.props.signupUser({ username, password, email });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button handlePress={this.onButtonPress.bind(this)}>
        Signup
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Username"
            placeholder="john123"
            onChangeText={this.onUsernameChange.bind(this)}
            value={this.props.username}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Email"
            placeholder="john@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            placeholder="password"
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
  const { username, password, email, error, loading } = state.auth;

  return { username, password, email, error, loading };
};

export default connect(mapStateToProps, {
  usernameChanged,
  emailChanged,
  passwordChanged,
  signupUser
})(SignupForm);
