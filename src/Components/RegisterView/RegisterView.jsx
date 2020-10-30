import React, { Component } from 'react';
import IntroImage from '../HomeView/IntroImage/IntroImage';
import RegisterForm from './RegisterForm/RegisterForm';
import './RegisterView.scss';
export default class RegisterView extends Component {
  render() {
    return (
      <div>
        <IntroImage />
        <RegisterForm />
      </div>
    );
  }
}
