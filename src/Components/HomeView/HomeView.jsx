import React, { Component } from 'react';
import './HomeView.scss';
import SearchBarView from '../SearchBarView/SearchBarView';
import IntroImage from './IntroImage/IntroImage';
import ServicesView from './Services/ServicesView';
import PopularTourView from './PopularTour/PopularTourView';
import TourView from './Tour/TourView';
export default class HomeView extends Component {
  render() {
    return (
      <div id="page">
        <IntroImage />
        <SearchBarView />
        <ServicesView />
        <TourView />
        <PopularTourView />
      </div>
    );
  }
}
