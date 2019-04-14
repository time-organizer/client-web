import React from 'react';
import PropTypes from 'prop-types';
import ColumnForms from '../ColumnForms';
import { Button, buttonTypes } from '../../../../../../common_components';

const ColumnEditor = ({
  handleInputChange,
  handleSelectChange,
  title,
  type,
  submitError,
  submitEditColumn,
  onSwitchOffColumnEditor,
}) => (
  <div className="column-content-wrapper">
    <ColumnForms
      handleInputChange={handleInputChange}
      handleSelectChange={handleSelectChange}
      title={title}
      type={type}
      submitError={submitError}
    />
    <Button className="margin-right-8" onClick={onSwitchOffColumnEditor} buttonType={buttonTypes.CANCEL}>Cancel</Button>
    <Button onClick={submitEditColumn} buttonType={buttonTypes.SUBMIT}>Save</Button>
  </div>
);

ColumnEditor.propTypes = {
  title: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  submitError: PropTypes.bool,
  handleSelectChange: PropTypes.func.isRequired,
  submitEditColumn: PropTypes.func.isRequired,
  onSwitchOffColumnEditor: PropTypes.func.isRequired,
  type: PropTypes.oneOfType([PropTypes.node, PropTypes.shape()]),
};
ColumnEditor.defaultProps = {
  title: '',
  submitError: false,
  type: null,
};

export default ColumnEditor;
