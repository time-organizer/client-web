import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dashboard from './Dashboard';
import { fetchBoardIfNeeded } from '../Workspace/actions';
import { BoardModel } from '../../../../models/Board';
import { toggleWidgetsChooser } from '../../../generalActions';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
    };
  }

  componentDidMount() {
    const { refreshBoard, match: { params } } = this.props;

    refreshBoard(params.id);
  }

  toggleEditMode = () => this.setState(prevState => ({ editMode: !prevState.editMode }));

  render() {
    const { editMode } = this.state;
    const { boardData, onToggleWidgetsChooser, widgetsChoosedOpened } = this.props;

    return boardData && (
      <Dashboard
        onToggleWidgetsChooser={onToggleWidgetsChooser}
        widgetsChoosedOpened={widgetsChoosedOpened}
        toggleEditMode={this.toggleEditMode}
        editMode={editMode}
      />
    );
  }
}

DashboardContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
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
