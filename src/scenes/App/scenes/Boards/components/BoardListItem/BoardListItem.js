import React from 'react';
import find from 'lodash/find';
import get from 'lodash/get';

import boardThemes from '../../utilities/boardThemes';
import BoardModel from '../../../../../../models/Board';

import './BoardListItem.css';

const BoardListItem = ({ board }) => {
  const boardTheme = find(boardThemes, theme => theme.key === board.theme);
  const listItemBg = { backgroundImage: `url(${get(boardTheme, 'bgThumb')})` };
  const title = get(board, 'title', '');

  return (
    <div className="board-list-item-wrapper">
      <div
        className="board-list-item"
        style={listItemBg}
      >
        <div className="board-list-item-title">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};

BoardListItem.propTypes = {
  board: BoardModel.isRequired,
};
BoardListItem.defaultProps = {};

export default BoardListItem;
