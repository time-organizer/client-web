import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import handleInputChange from '../../../../../../../utilities/handleInputChange';
import handleSelectChange from '../../../../../../../utilities/handleSelectChange';

import NewColumnForm from './NewColumnForm';
import { addNewColumn } from '../actions';
import { columnTypes, defaultColumnType } from '../../../../utilities/columnTypes';

class NewColumnFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      addingColumnActive: false,
      submitError: false,
      type: defaultColumnType,
    };

    this.handleInputChange = handleInputChange.bind(this);
    this.handleSelectChange = handleSelectChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { addingColumnActive } = this.state;
    if (prevState.addingColumnActive !== addingColumnActive && addingColumnActive) {
      // eslint-disable-next-line
      window.addEventListener('keydown', this.handleKeyPress);
    } else if (prevState.addingColumnActive !== addingColumnActive && !addingColumnActive) {
      // eslint-disable-next-line
      window.removeEventListener('keydown', this.handleKeyPress);
    }
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.submitNewColumn();
    } else if (e.key === 'Escape') {
      this.toggleAddingColumn();
    }
  };

  toggleAddingColumn = () => {
    const { addingColumnActive } = this.state;

    this.setState({
      addingColumnActive: !addingColumnActive,
      title: '',
    });
  };

  submitNewColumn = () => {
    const { onAddNewColumn, boardId } = this.props;
    const { title, type } = this.state;

    if (!title.length) {
      this.setState({ submitError: true });
      return;
    }

    const newColumn = {
      title,
      boardId,
      type: get(type, 'value', columnTypes.BACKLOG),
    };

    onAddNewColumn(newColumn)
      .then(this.toggleAddingColumn);
  };

  render() {
    const {
      title, addingColumnActive, submitError, type,
    } = this.state;

    return (
      <NewColumnForm
        title={title}
        handleInputChange={this.handleInputChange}
        addingColumnActive={addingColumnActive}
        toggleAddingColumn={this.toggleAddingColumn}
        submitNewColumn={this.submitNewColumn}
        submitError={submitError}
        type={type}
        handleSelectChange={this.handleSelectChange}
      />
    );
  }
}

NewColumnFormContainer.propTypes = {
  onAddNewColumn: PropTypes.func.isRequired,
  boardId: PropTypes.string,
};
NewColumnFormContainer.defaultProps = {
  boardId: '',
};

function mapStateToProps({ boards: { workspace: { board } } }) {
  const boardId = get(board, 'data._id');

  return {
    boardId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddNewColumn: column => dispatch(addNewColumn(column)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewColumnFormContainer);
