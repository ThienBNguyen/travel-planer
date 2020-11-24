import React, { Component } from 'react';
import './HomeView.scss';
import SearchBarView from '../SearchBarView/SearchBarView';
import IntroImage from './IntroImage/IntroImage';
import ServicesView from './Services/ServicesView';
import PopularTourView from './PopularTour/PopularTourView';
import TourView from './Tour/TourView';
import BlogView from './Blog/BlogView';
import PromotionView from './Promotion/PromotionView';
import RecomendedView from './Recomended/RecomendedView';
import TestimonyView from './Testimony/TestimonyView';
import FooterView from '../CommonView/Footer/FooterView';
export default class HomeView extends Component {
  render() {
    return (
      <div id="page">
        <IntroImage />
        <SearchBarView />
        <ServicesView />
        <TourView />
        <BlogView />
        <PromotionView />
        <RecomendedView />
        <TestimonyView />
        <PopularTourView />
        <FooterView />
      </div>
    );
  }
}
