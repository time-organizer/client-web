import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import get from 'lodash/get';
import intersection from 'lodash/intersection';

import { connect } from 'react-redux';
import { fetchLabelsIfNeeded } from '../../../Labels/actions';

class TaskLabels extends Component {
  componentDidMount() {
    const { onFetchLabelsIfNeeded, boardId } = this.props;

    onFetchLabelsIfNeeded(boardId);
  }

  render() {
    const { activeLabels } = this.props;

    return activeLabels.length > 0 && (
      <div className="task-labels">
        {activeLabels.map(label => (
          <div className="task-label" style={{ backgroundColor: label.color }} />
        ))}
      </div>
    );
  }
}

TaskLabels.propTypes = {
  onFetchLabelsIfNeeded: PropTypes.func.isRequired,
  boardId: PropTypes.string.isRequired,
  activeLabels: PropTypes.arrayOf(PropTypes.string),
};
TaskLabels.defaultProps = {
  activeLabels: [],
};

function mapStateToProps({ boards: { workspace: { board, labels: { labelsById } } } }, ownProps) {
  const { task } = ownProps;
  const taskLabelsIds = get(task, 'labels');
  const labelsIds = map(labelsById, label => label._id);

  const activeLabelsIds = intersection(taskLabelsIds, labelsIds);
  const activeLabels = map(activeLabelsIds, (labelId => labelsById[labelId]));

  return {
    boardId: board.data._id,
    activeLabels,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchLabelsIfNeeded: boardId => dispatch(fetchLabelsIfNeeded(boardId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskLabels);
