import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withAuth from '../Auth/withAuth';
import Header from './components/Header';
import UserSidebar from './components/UserSidebar';
import { fetchUserIfNeeded } from './components/UserSidebar/actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { refreshUser } = this.props;

    refreshUser();
  }

  render() {
    return (
      <div className="app-layout">
        <Header />
        <UserSidebar />
      </div>
    );
  }
}

App.propTypes = {
  refreshUser: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    refreshUser: () => dispatch(fetchUserIfNeeded()),
  };
}

export default withRouter(withAuth(connect(null, mapDispatchToProps)(App)));
