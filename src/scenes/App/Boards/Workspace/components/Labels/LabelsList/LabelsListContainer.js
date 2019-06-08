import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LabelsList from './LabelsList';
import { toggleNewLabelForm } from '../../../../../../generalActions';
import { fetchLabelsIfNeeded } from '../actions';

class LabelsListContainer extends Component {
  componentDidMount() {
    const { onFetchLabelsIfNeeded, boardId } = this.props;

    onFetchLabelsIfNeeded(boardId);
  }

  render() {
    const { withNewButton, onToggleNewLabelForm } = this.props;
    return (
      <LabelsList
        withNewButton={withNewButton}
        toggleNewLabelForm={onToggleNewLabelForm}
      />
    );
  }
}

LabelsListContainer.propTypes = {
  withNewButton: PropTypes.bool,
  onToggleNewLabelForm: PropTypes.func.isRequired,
  onFetchLabelsIfNeeded: PropTypes.func.isRequired,
  boardId: PropTypes.string.isRequired,
};
LabelsListContainer.defaultProps = {
  withNewButton: false,
};

function mapStateToProps({ boards: { workspace: { board } } }) {
  return {
    boardId: board.data._id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleNewLabelForm: () => dispatch(toggleNewLabelForm()),
    onFetchLabelsIfNeeded: boardId => dispatch(fetchLabelsIfNeeded(boardId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelsListContainer);
