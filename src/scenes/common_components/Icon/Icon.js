import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import './Icon.css';

import { ReactComponent as EditIcon } from './icons/icon-edit.svg';
import { ReactComponent as LogoIcon } from './icons/icon-logo.svg';
import { ReactComponent as UserIcon } from './icons/icon-user.svg';
import { ReactComponent as ErrorIcon } from './icons/icon-error.svg';

export const iconNames = {
  edit: 'edit',
  logo: 'logo',
  user: 'user',
  error: 'error',
};

class Icon extends Component {
  getIcon() {
    const { name } = this.props;

    switch (name) {
    case iconNames.edit:
      return <EditIcon {...this.props} />;

    case iconNames.logo:
      return <LogoIcon {...this.props} />;

    case iconNames.user:
      return <UserIcon {...this.props} />;

    case iconNames.error:
      return <ErrorIcon {...this.props} />;

    default:
      return '';
    }
  }

  render() {
    return (
      <i className="icon">
        {this.getIcon()}
      </i>
    );
  }
}

Icon.propTypes = {
  name: PropTypes.oneOf(map(iconNames, iconName => iconName)),
};
Icon.defaultProps = {
  name: '',
};

export default Icon;
