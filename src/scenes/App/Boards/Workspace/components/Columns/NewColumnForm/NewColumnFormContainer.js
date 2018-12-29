import React, { Component } from 'react';
import { connect } from 'react-redux';
import handleInputChange from '../../../../../../../utilities/handleInputChange';

import NewColumnForm from './NewColumnForm';

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

    this.setState({ addingColumnActive: !addingColumnActive });
  };

  render() {
    const { title, addingColumnActive } = this.state;

    return (
      <NewColumnForm
        title={title}
        handleInputChange={this.handleInputChange}
        addingColumnActive={addingColumnActive}
        toggleAddingColumn={this.toggleAddingColumn}
      />
    );
  }
}

NewColumnFormContainer.propTypes = {};
NewColumnFormContainer.defaultProps = {};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(NewColumnFormContainer);
