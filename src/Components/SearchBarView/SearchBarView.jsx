import React, { Component } from 'react';
import SearchBarForm from './SearchBarForm/SearchBarForm';
import SearchBarTabView from './SearchBarForm/SearchBarTabView';
import './SearchBarView.scss';
export default class SearchBarView extends Component {
  render() {
    return (
      <div id="colorlib-reservation">
        <div className="row">
          <div className="search-wrap">
            <SearchBarForm />
            {/* <SearchBarTabView /> */}
          </div>
        </div>
      </div>
    );
  }
}
