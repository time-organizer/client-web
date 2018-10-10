import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import Fade from '../../../../../../components/transitions/Fade';
import './BoardThemeBlock.css';

const BoardThemeBlock = ({ boardTheme, chosenTheme, changeBoardTheme }) => {
  const isSelected = boardTheme.key === chosenTheme;

  return (
    <div
      onClick={() => changeBoardTheme(boardTheme.key)}
      className={c('board-theme-block', { isSelected })}
      style={{ backgroundImage: `url(${boardTheme.bgThumb})` }}
    >
      <Fade trigger={isSelected}>
        <div className="selected-status">
          <i className="icon-check" />
        </div>
      </Fade>
    </div>
  );
};

BoardThemeBlock.propTypes = {
  boardTheme: PropTypes.shape({
    key: PropTypes.number.isRequired,
    bgThumb: PropTypes.string.isRequired,
  }).isRequired,
  chosenTheme: PropTypes.string,
  changeBoardTheme: PropTypes.func.isRequired,
};
BoardThemeBlock.defaultProps = {
  chosenTheme: '',
};

export default BoardThemeBlock;
