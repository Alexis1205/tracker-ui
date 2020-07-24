import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Page from '../src/Page.jsx';
import store from '../src/store.js';

/* eslint-disable no-underscore-dangle */
store.initialData = window.__INITIAL_DATA__; // Use initial data to initialize the store
store.userData = window.__USER_DATA__;

const element = (
  <Router>
    <Page />
  </Router>
);
// Change render() to hydrate() so that React can attach to the server HTML
ReactDOM.hydrate(element, document.getElementById('contents'));

if (module.hot) {
  module.hot.accept();
}
