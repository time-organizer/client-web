import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Workspace from './Workspace';
import { fetchBoardIfNeeded } from './actions';
import { BoardModel } from '../../../../models/Board';
import { Loader } from '../../../common_components';

class WorkspaceContainer extends Component {
  componentDidMount() {
    const { refreshBoard, match: { params } } = this.props;

    refreshBoard(params.id);
  }

  render() {
    const {
      match: { params },
      boardData,
      newLabelFormOpened,
      isFetching,
    } = this.props;
    const properBoardLoaded = get(boardData, '_id') === params.id;

    return (
      <Fragment>
        {isFetching && <Loader absolute />}
        {!isFetching && boardData && properBoardLoaded && (
          <Workspace
            board={boardData}
            isFetching={isFetching}
            newLabelFormOpened={newLabelFormOpened}
          />
        )}
      </Fragment>
    );
  }
}

WorkspaceContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  boardData: BoardModel,
  refreshBoard: PropTypes.func.isRequired,
  newLabelFormOpened: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
WorkspaceContainer.defaultProps = {
  boardData: null,
};

function mapStateToProps({
  boards: { workspace: { board } },
  general: { forms: { newLabelFormOpened } },
}) {
  const { isFetching } = board;
  const boardData = board.data;

  return {
    board,
    boardData,
    newLabelFormOpened,
    isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshBoard: id => dispatch(fetchBoardIfNeeded(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceContainer);
