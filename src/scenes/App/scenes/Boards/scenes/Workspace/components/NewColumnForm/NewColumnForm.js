import React, { Component } from 'react';
import ColumnWrapper from '../ColumnWrapper';
import Input from '../../../../../../../components/BorderInput';

class NewColumnForm extends Component {
  state = {
    addingNewForm: false,
  };

  toggleAddingNewForm = () => {
    const { addingNewForm } = this.state;

    this.setState({ addingNewForm: !addingNewForm });
  };

  render() {
    const { addingNewForm } = this.state;
    return (
      <ColumnWrapper>
        {!addingNewForm
          ? <div onClick={this.toggleAddingNewForm}>Add new board</div>
          : <Input name="new_column" onChange={() => {}} placeholder="Add new board" />
        }
      </ColumnWrapper>
    );
  }
}

NewColumnForm.propTypes = {};
NewColumnForm.defaultProps = {};

export default NewColumnForm;
