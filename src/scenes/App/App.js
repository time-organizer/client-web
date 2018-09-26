import React from 'react';
import { withRouter } from 'react-router-dom';

import withAuth from '../Auth/withAuth';
import Header from './components/Header';

import './App.css';

const App = () => (
  <div className="app-layout">
    <Header />
  </div>
);

App.propTypes = {};
App.defaultProps = {};

export default withRouter(withAuth(App));
