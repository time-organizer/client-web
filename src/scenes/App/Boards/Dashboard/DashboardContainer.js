import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dashboard from './Dashboard';
import { fetchBoardIfNeeded } from '../Workspace/actions';
import { BoardModel } from '../../../../models/Board';
import { toggleWidgetsChooser } from '../../../generalActions';

class DashboardContainer extends Component {
  componentDidMount() {
    const { refreshBoard, match: { params } } = this.props;

    refreshBoard(params.id);
  }

  render() {
    const { boardData, onToggleWidgetsChooser, widgetsChoosedOpened } = this.props;

    return boardData && (
      <Dashboard
        onToggleWidgetsChooser={onToggleWidgetsChooser}
        widgetsChoosedOpened={widgetsChoosedOpened}
      />
    );
  }
}

DashboardContainer.propTypes = {
  match: PropTypes.shape({}).isRequired,
  boardData: BoardModel,
  refreshBoard: PropTypes.func.isRequired,
  onToggleWidgetsChooser: PropTypes.func.isRequired,
  widgetsChoosedOpened: PropTypes.bool.isRequired,
};
DashboardContainer.defaultProps = {
  boardData: null,
};

function mapStateToProps({
  boards: { workspace: { board } },
  general: { widgetsChoosedOpened },
}) {
  const boardData = board.data;

  return {
    board,
    boardData,
    widgetsChoosedOpened,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshBoard: id => dispatch(fetchBoardIfNeeded(id)),
    onToggleWidgetsChooser: () => dispatch(toggleWidgetsChooser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
