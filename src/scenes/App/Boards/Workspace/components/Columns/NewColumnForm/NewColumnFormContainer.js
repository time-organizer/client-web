import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import handleInputChange from '../../../../../../../utilities/handleInputChange';

import NewColumnForm from './NewColumnForm';
import { addNewColumn } from '../actions';

class NewColumnFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      addingColumnActive: false,
    };

    this.handleInputChange = handleInputChange.bind(this);
  }

  toggleAddingColumn = () => {
    const { addingColumnActive } = this.state;

    this.setState({
      addingColumnActive: !addingColumnActive,
      title: '',
    });
  };

  submitNewColumn = () => {
    const { onAddNewColumn, boardId } = this.props;
    const { title } = this.state;

    const newColumn = {
      title,
      boardId,
    };

    onAddNewColumn(newColumn)
      .then(this.toggleAddingColumn);
  };

  render() {
    const { title, addingColumnActive } = this.state;

    return (
      <NewColumnForm
        title={title}
        handleInputChange={this.handleInputChange}
        addingColumnActive={addingColumnActive}
        toggleAddingColumn={this.toggleAddingColumn}
        submitNewColumn={this.submitNewColumn}
      />
    );
  }
}

NewColumnFormContainer.propTypes = {
  onAddNewColumn: PropTypes.func.isRequired,
  boardId: PropTypes.string.isRequired,
};
NewColumnFormContainer.defaultProps = {};

function mapStateToProps({ boards: { workspace: { board } } }) {
  const boardId = board.data._id;

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
