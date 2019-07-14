/* eslint-disable no-nested-ternary  */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import find from 'lodash/find';
import chroma from 'chroma-js';

import colors from '../../../utilities/colors';

import './Select.css';

const shape = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 4,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 16,
    width: '100%',
  },
});

const getStyles = (options, value) => {
  const valueObject = find(options, option => option.value === value) || {};
  const { shapeColor, withShape } = valueObject;
  const inputShape = withShape ? shape(shapeColor) : {};

  return {
    control: libStyles => ({
      ...libStyles,
      boxShadow: '0px 0px 10px -3px rgba(0, 0, 0, 0.2)',
      border: 'none',
      padding: '4px',
      fontSize: '1.4rem',
    }),
    option: (libStyles, {
      data, isDisabled, isFocused, isSelected,
    }) => {
      const hoverColor = chroma(colors.accentColor).alpha(0.2).css();
      const { withShape: currentWithShape, shapeColor: currentShapeColor } = data;
      const currentShape = currentWithShape ? shape(currentShapeColor) : {};

      return {
        ...libStyles,
        backgroundColor:
          isDisabled ? null : isSelected ? colors.accentColor : isFocused ? hoverColor : null,
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        ...currentShape,
      };
    },
    placeholder: libStyles => ({
      ...libStyles,
      color: '#dbdbdb',
    }),
    singleValue: libStyles => ({
      ...libStyles,
      color: '#7b7b7b',
      fontSize: '1.4rem',
    }),
    input: libStyles => ({
      ...libStyles,
      width: '100%',
      ...inputShape,
    }),
  };
};

const Selectizer = ({
  value,
  onChange,
  options,
}) => (
  <div className="select">
    <Select
      styles={getStyles(options, value)}
      value={find(options, option => option.value === value)}
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
