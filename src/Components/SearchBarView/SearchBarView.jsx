import React, { Component } from 'react';
import SearchBarForm from './SearchBarForm/SearchBarFrom';
import './SearchBarView.scss';
export default class SearchBarView extends Component {
  render() {
    return (
      <div>
        <SearchBarForm />
      </div>
    );
  }
}
