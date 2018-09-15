import React from 'react';
import { withRouter } from 'react-router-dom';

import withAuth from '../Auth/withAuth';

const App = () => (
  <div>
    App
  </div>
);

App.propTypes = {};
App.defaultProps = {};

export default withRouter(withAuth(App));
