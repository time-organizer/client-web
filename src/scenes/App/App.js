import React from 'react';
import { withRouter } from 'react-router-dom';

import withAuth from '../Auth/withAuth';
import Header from './components/Header';
import UserSidebar from './components/UserSidebar';
import './App.css';

const App = () => (
  <div className="app-layout">
    <Header />
    <UserSidebar />
  </div>
);

App.propTypes = {};
App.defaultProps = {};

export default withRouter(withAuth(App));
