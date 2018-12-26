import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Workspace from './Workspace';
import { fetchBoardIfNeeded } from '../../actions';

class WorkspaceContainer extends Component {
  componentWillMount() {
    const { refreshBoard, match: { params } } = this.props;
    refreshBoard(params.id);
  }

  render() {
    const { workspace } = this.props;
    return (
      <Workspace board={workspace.board} />
    );
  }
}

WorkspaceContainer.propTypes = {
  match: PropTypes.shape({}).isRequired,
  workspace: PropTypes.shape({}),
  refreshBoard: PropTypes.func.isRequired,
};
WorkspaceContainer.defaultProps = {
  workspace: null,
};

function mapStateToProps({ boards: { workspace } }) {
  return {
    workspace,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshBoard: id => dispatch(fetchBoardIfNeeded(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceContainer);
