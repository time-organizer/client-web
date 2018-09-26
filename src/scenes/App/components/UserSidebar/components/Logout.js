import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';

import AuthService from '../../../../../services/AuthService';

class Logout extends Component {
  logout = () => {
    const { history } = this.props;
    AuthService.logout();
    history.replace('/auth/login');
  };

  render() {
    return (
      <div className="user-sidebar-logout" onClick={this.logout}>
        LOGOUT
      </div>
    );
  }
}

Logout.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Logout);
