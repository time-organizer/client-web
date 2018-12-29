import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import withAuth from '../Auth/withAuth';
import Header from './components/Header';
import UserSidebar from './components/UserSidebar';
import MenuSidebar from './components/MenuSidebar';
import Boards from './Boards';

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
        <MenuSidebar />
        <UserSidebar />
        <Switch>
          <Route path="/boards" component={Boards} />
          <Redirect from="**" to="/boards" />
        </Switch>
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

export default withAuth(connect(null, mapDispatchToProps)(App));
