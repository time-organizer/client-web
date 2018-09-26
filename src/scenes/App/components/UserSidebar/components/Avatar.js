import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.css';

const Avatar = ({ name }) => (
  <div className="avatar">
    <div className="avatar-circle">
      <i className="icon-user" />
    </div>
    <div className="avatar-name">
      <h2 className="italic">Hello, {name}</h2>
    </div>
  </div>
);

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Avatar;
