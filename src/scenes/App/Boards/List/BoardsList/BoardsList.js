import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import {
  TransitionGroup,
} from 'react-transition-group';

import NewBoardButton from '../../New/NewBoardButton';
import BoardListItem from '../BoardListItem';
import { BoardModel } from '../../../../../models/Board';
import Fade from '../../../../common_components/transitions/Fade';
import { Loader } from '../../../../common_components';

import './BoardsList.css';
import ContentHeader from '../../../components/ContentHeader/ContentHeader';
import Content from '../../../components/Content/Content';
import ContentLayout from '../../../components/ContentLayout/ContentLayout';

const BoardsList = ({ boards, isFetching }) => (
  <ContentLayout scrollable>
    <ContentHeader headerName="Boards" />
    <Content>
      <TransitionGroup className="boards-list">
        <NewBoardButton />
        {map(boards, board => (
          <Fade
            trigger={!isFetching}
            key={board._id}
          >
            <BoardListItem
              board={board}
            />
          </Fade>
        ))}
      </TransitionGroup>
      {isFetching && <Loader absolute />}
    </Content>
  </ContentLayout>
);

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(BoardModel),
  isFetching: PropTypes.bool,
};
BoardsList.defaultProps = {
  boards: [],
  isFetching: false,
};

export default BoardsList;
