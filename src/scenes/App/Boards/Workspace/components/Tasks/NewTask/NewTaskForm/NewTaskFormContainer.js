import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from './NewTaskForm';
import handleInputChange from '../../../../../../../../utilities/handleInputChange';

class NewTaskFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.handleInputChange = handleInputChange.bind(this);
  }

  render() {
    const { onClose } = this.props;
    const { title } = this.state;

    return (
      <NewTaskForm
        onClose={onClose}
        onChange={this.handleInputChange}
        values={{
          title,
        }}
      />
    );
  }
}

NewTaskFormContainer.propTypes = {
  onClose: PropTypes.func.isRequired,
};
NewTaskFormContainer.defaultProps = {};

export default NewTaskFormContainer;
