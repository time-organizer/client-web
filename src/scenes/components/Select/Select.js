/* eslint-disable no-nested-ternary  */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import colors from '../../../utilities/colors';

import './Select.css';

const styles = {
  control: libStyles => ({
    ...libStyles,
    boxShadow: '0px 0px 10px -3px rgba(0, 0, 0, 0.2)',
    border: 'none',
    padding: '4px',
    fontSize: '1rem',
  }),
  option: (libStyles, {
    isDisabled, isFocused, isSelected,
  }) => {
    const hoverColor = 'rgba(76,164,255,0.12)';

    return {
      ...libStyles,
      backgroundColor:
        isDisabled ? null : isSelected ? colors.accentColor : isFocused ? hoverColor : null,
      cursor: isDisabled ? 'not-allowed' : 'pointer',
    };
  },
  placeholder: libStyles => ({
    ...libStyles,
    color: '#dbdbdb',
  }),
  singleValue: libStyles => ({
    ...libStyles,
    color: '#7b7b7b',
  }),
};

const Selectizer = ({
  value,
  onChange,
  options,
}) => (
  <div className="select">
    <Select
      styles={styles}
      value={value}
      onChange={onChange}
      options={options}
    />
  </div>
);

Selectizer.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
    PropTypes.string,
  ]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};
Selectizer.defaultProps = {
  value: null,
};

export default Selectizer;
