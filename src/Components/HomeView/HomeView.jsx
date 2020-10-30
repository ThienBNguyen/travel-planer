import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeView.scss';
import IntroText from './IntroText/IntroText';
import SearchBarView from '../SearchBarView/SearchBarView';
import IntroImage from './IntroImage/IntroImage';
export default class HomeView extends Component {
  render() {
    return (
      <div className="hero">
        <IntroText />
        <IntroImage />
        <SearchBarView />
      </div>
    );
  }
}
