import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

import './Icon.css';

import { ReactComponent as EditIcon } from './icons/icon-edit.svg';
import { ReactComponent as LogoIcon } from './icons/icon-logo.svg';
import { ReactComponent as UserIcon } from './icons/icon-user.svg';

export const iconNames = {
  edit: 'edit',
  logo: 'logo',
  user: 'user',
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

    default:
      return '';
    }
  }

  render() {
    const { size } = this.props;

    return (
      <i className={`icon size-${size}`}>
        {this.getIcon()}
      </i>
    );
  }
}

Icon.propTypes = {
  name: PropTypes.oneOf(map(iconNames, iconName => iconName)),
  size: PropTypes.oneOf([2, 3, 4, 5]),
};
Icon.defaultProps = {
  name: '',
  size: 1,
};

export default Icon;
