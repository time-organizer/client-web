import React from 'react';
import PropTypes from 'prop-types';

import './Col.css';

const columnsWidths = {
  W100: 'w100',
  W50: 'w50',
  W33: 'w33',
  W25: 'w25',
};

const Col = ({ children, desktopWidth, mobileWidth }) => (
  <div className={`col ${desktopWidth} mobile-${mobileWidth}`}>
    {children}
  </div>
);

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  desktopWidth: PropTypes.oneOf([
    columnsWidths.W25,
    columnsWidths.W33,
    columnsWidths.W50,
    columnsWidths.W100,
  ]),
  mobileWidth: PropTypes.oneOf([
    columnsWidths.W25,
    columnsWidths.W33,
    columnsWidths.W50,
    columnsWidths.W100,
  ]),
};
Col.defaultProps = {
  desktopWidth: columnsWidths.W100,
  mobileWidth: columnsWidths.W100,
};

export {
  columnsWidths,
};

export default Col;
