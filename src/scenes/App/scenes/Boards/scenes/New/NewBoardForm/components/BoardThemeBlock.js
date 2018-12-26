import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import Fade from '../../../../../../../components/transitions/Fade';
import './BoardThemeBlock.css';

const BoardThemeBlock = ({ boardTheme, changeBoardTheme, isSelected }) => (
  <div
    onClick={() => changeBoardTheme(boardTheme.key)}
    className={c('board-theme-block', { 'is-selected': isSelected })}
    style={{ backgroundImage: `url(${boardTheme.bgThumb})` }}
  >
    <Fade trigger={isSelected}>
      <div className="selected-status">
        <i className="icon-check" />
      </div>
    </Fade>
  </div>
);

BoardThemeBlock.propTypes = {
  boardTheme: PropTypes.shape({
    key: PropTypes.number.isRequired,
    bgThumb: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  changeBoardTheme: PropTypes.func.isRequired,
};

export default BoardThemeBlock;
