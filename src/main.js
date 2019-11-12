import './stylesheets/main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import animals from './constants/data';
import App from './components/app'

ReactDOM.render(
  <App animals={animals}/>, document.getElementById('app')
  // passing in the data from animals from the data.js file to a variable called animals.
);
