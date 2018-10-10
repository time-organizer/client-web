import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewBoardForm from './NewBoardForm';
import { toggleNewBoardForm } from '../../../../../generalActions';

class NewBoardFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      boardTheme: '',
    };
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  changeBoardTheme = (boardTheme) => {
    const { boardTheme: chosenTheme } = this.state;
    if (boardTheme === chosenTheme) {
      this.setState({ boardTheme: '' });
      return;
    }

    this.setState({ boardTheme });
  };

  render() {
    const { onToggleNewBoardForm } = this.props;
    const { title, boardTheme } = this.state;

    return (
      <NewBoardForm
        onToggleNewBoardForm={onToggleNewBoardForm}
        changeBoardTheme={this.changeBoardTheme}
        handleInputChange={this.handleInputChange}
        values={{
          title,
          boardTheme,
        }}
      />
    );
  }
}

NewBoardFormContainer.propTypes = {
  onToggleNewBoardForm: PropTypes.func.isRequired,
};
NewBoardFormContainer.defaultProps = {};

function mapDispatchToProps(dispatch) {
  return {
    onToggleNewBoardForm: () => dispatch(toggleNewBoardForm()),
  };
}

export default connect(null, mapDispatchToProps)(NewBoardFormContainer);
