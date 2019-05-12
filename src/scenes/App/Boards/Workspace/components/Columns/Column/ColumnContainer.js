import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { Draggable } from 'react-beautiful-dnd';

import { switchOffColumnEditor, switchOnColumnEditor } from '../../../../../../generalActions';
import ColumnPresentation from './ColumnPresentation';
import handleInputChange from '../../../../../../../utilities/handleInputChange';
import { updateColumn } from '../actions';
import ColumnEditor from './ColumnEditor';
import handleSelectChange from '../../../../../../../utilities/handleSelectChange';

class ColumnContainer extends Component {
  constructor(props) {
    super(props);
    const { column } = props;

    this.state = {
      submitError: false,
      title: get(column, 'title', ''),
      type: get(column, 'type', null),
    };

    this.handleInputChange = handleInputChange.bind(this);
    this.handleSelectChange = handleSelectChange.bind(this);
  }

  submitEditColumn = () => {
    const { onColumnUpdate, column, onSwitchOffColumnEditor } = this.props;
    const { title, type } = this.state;
    const { _id } = column;

    if (!title.length) {
      this.setState({ submitError: true });
      return;
    }

    const updatedData = {
      title,
      type,
    };

    onColumnUpdate(_id, updatedData)
      .then(onSwitchOffColumnEditor)
      .catch(() => {});
  };

  render() {
    const {
      column, index, columnIdEditMode, onSwitchOnColumnEditor, onSwitchOffColumnEditor,
    } = this.props;
    const columnId = get(column, '_id');
    const { title, type, submitError } = this.state;

    return (
      <Draggable
        draggableId={column._id}
        index={index}
      >
        {providedDraggable => (
          <div
            className="column-wrapper"
            ref={providedDraggable.innerRef}
            {...providedDraggable.draggableProps}
          >
            {columnIdEditMode === columnId
              ? (
                <ColumnEditor
                  onSwitchOffColumnEditor={onSwitchOffColumnEditor}
                  handleInputChange={this.handleInputChange}
                  handleSelectChange={this.handleSelectChange}
                  submitEditColumn={this.submitEditColumn}
                  submitError={submitError}
                  title={title}
                  type={type}
                />
              )
              : (
                <ColumnPresentation
                  column={column}
                  index={index}
                  providedDraggable={providedDraggable}
                  onSwitchOnColumnEditor={onSwitchOnColumnEditor}
                />
              )
            }
          </div>
        )}
      </Draggable>
    );
  }
}

ColumnContainer.propTypes = {
  onSwitchOffColumnEditor: PropTypes.func.isRequired,
  onSwitchOnColumnEditor: PropTypes.func.isRequired,
  onColumnUpdate: PropTypes.func.isRequired,
  column: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired,
  columnIdEditMode: PropTypes.string,
};

ColumnContainer.defaultProps = {
  columnIdEditMode: null,
};

function mapStateToProps({ general: { editors: { columnId } } }) {
  return {
    columnIdEditMode: columnId,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onSwitchOnColumnEditor: () => dispatch(switchOnColumnEditor(get(ownProps, 'column._id'))),
    onSwitchOffColumnEditor: () => dispatch(switchOffColumnEditor()),
    onColumnUpdate: (columnId, newData) => dispatch(updateColumn(columnId, newData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ColumnContainer);
