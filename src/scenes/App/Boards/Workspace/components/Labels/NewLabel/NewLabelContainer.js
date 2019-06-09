import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewLabel from './NewLabel';
import { toggleNewLabelForm } from '../../../../../../generalActions';
import handleInputChange from '../../../../../../../utilities/handleInputChange';
import handleSelectChange from '../../../../../../../utilities/handleSelectChange';
import { defaultLabelColor } from '../../../../utilities/labelColors';
import { addNewLabel } from '../actions';

class NewLabelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      submitError: false,
      color: defaultLabelColor.value,
      startingDate: '',
      dueDate: '',
      conflict: false,
    };
    this.handleInputChange = handleInputChange.bind(this);
    this.handleSelectChange = handleSelectChange.bind(this);
  }

  submitNewLabel = () => {
    const { onToggleNewLabelForm, onAddNewLabel } = this.props;
    const {
      title, color, startingDate, dueDate,
    } = this.state;

    if (!title.length || !color.length) {
      this.setState({ submitError: true });
      return;
    }

    const newLabel = {
      title,
      color,
      startingDate,
      dueDate,
    };

    onAddNewLabel(newLabel)
      .then(onToggleNewLabelForm)
      .catch(this.handleConflict);
  };

  handleConflict = (error) => {
    if (error.response.status === 409) {
      this.setState({ conflict: true });
    }
  };

  render() {
    const { onToggleNewLabelForm } = this.props;
    const {
      title, submitError, color, startingDate, dueDate, conflict,
    } = this.state;

    return (
      <NewLabel
        toggleNewLabelForm={onToggleNewLabelForm}
        handleInputChange={this.handleInputChange}
        handleSelectChange={this.handleSelectChange}
        submitNewLabel={this.submitNewLabel}
        title={title}
        submitError={submitError}
        color={color}
        startingDate={startingDate}
        dueDate={dueDate}
        conflict={conflict}
      />
    );
  }
}

NewLabelContainer.propTypes = {
  onToggleNewLabelForm: PropTypes.func.isRequired,
  onAddNewLabel: PropTypes.func.isRequired,
};
NewLabelContainer.defaultProps = {};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleNewLabelForm: () => dispatch(toggleNewLabelForm()),
    onAddNewLabel: newLabel => dispatch(addNewLabel(newLabel)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLabelContainer);
