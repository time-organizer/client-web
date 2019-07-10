import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { connect } from 'react-redux';

import LabelsList from './LabelsList';
import { toggleNewLabelForm } from '../../../../../../generalActions';
import { fetchLabelsIfNeeded } from '../actions';
import LabelModel from '../../../../../../../models/Label';

class LabelsListContainer extends Component {
  componentDidMount() {
    const { onFetchLabelsIfNeeded, boardId } = this.props;

    onFetchLabelsIfNeeded(boardId);
  }

  render() {
    const {
      withNewButton, onToggleNewLabelForm, labels, onLabelClick,
    } = this.props;
    return (
      <LabelsList
        withNewButton={withNewButton}
        toggleNewLabelForm={onToggleNewLabelForm}
        labels={labels}
        onLabelClick={onLabelClick}
      />
    );
  }
}

LabelsListContainer.propTypes = {
  withNewButton: PropTypes.bool,
  onToggleNewLabelForm: PropTypes.func.isRequired,
  onFetchLabelsIfNeeded: PropTypes.func.isRequired,
  boardId: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(LabelModel).isRequired,
  onLabelClick: PropTypes.func.isRequired,
};
LabelsListContainer.defaultProps = {
  withNewButton: false,
};

function mapStateToProps({ boards: { workspace: { board, labels: { labelsById } } } }) {
  const labels = map(labelsById, label => label);

  return {
    boardId: board.data._id,
    labels,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleNewLabelForm: () => dispatch(toggleNewLabelForm()),
    onFetchLabelsIfNeeded: boardId => dispatch(fetchLabelsIfNeeded(boardId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelsListContainer);
