import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm';
import IntroImage from '../HomeView/IntroImage/IntroImage';
import './LoginView.scss';
export default class LoginView extends Component {
  render() {
    return (
      <div>
        <IntroImage />
        <LoginForm />
      </div>
    );
  }
}
