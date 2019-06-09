import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewLabel from './NewLabel';
import { toggleNewLabelForm } from '../../../../../../generalActions';
import handleInputChange from '../../../../../../../utilities/handleInputChange';
import handleSelectChange from '../../../../../../../utilities/handleSelectChange';
import { defaultLabelColor } from '../../../../utilities/labelColors';

class NewLabelContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      submitError: false,
      color: defaultLabelColor.value,
      startingDate: '',
      endingDate: '',
    };
    this.handleInputChange = handleInputChange.bind(this);
    this.handleSelectChange = handleSelectChange.bind(this);
  }

  render() {
    const { onToggleNewLabelForm } = this.props;
    const {
      title, submitError, color, startingDate, endingDate,
    } = this.state;

    return (
      <NewLabel
        toggleNewLabelForm={onToggleNewLabelForm}
        handleInputChange={this.handleInputChange}
        handleSelectChange={this.handleSelectChange}
        title={title}
        submitError={submitError}
        color={color}
        startingDate={startingDate}
        endingDate={endingDate}
      />
    );
  }
}

NewLabelContainer.propTypes = {
  onToggleNewLabelForm: PropTypes.func.isRequired,
};
NewLabelContainer.defaultProps = {};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleNewLabelForm: () => dispatch(toggleNewLabelForm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLabelContainer);
