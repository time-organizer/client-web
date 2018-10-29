import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';

import AuthService from '../../../../../services/AuthService';

class Logout extends Component {
  logout = () => {
    const { history, onUserLogout } = this.props;
    AuthService.logout();
    onUserLogout();
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
  onUserLogout: PropTypes.func.isRequired,
};

export default withRouter(Logout);
