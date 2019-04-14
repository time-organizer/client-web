import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  BorderInput,
  Label,
  Select,
  ErrorMessage,
} from '../../../../../common_components';
import { columnTypesSelectOptions } from '../../../utilities/columnTypes';

const ColumnForms = ({
  title,
  handleInputChange,
  submitError,
  handleSelectChange,
  type,
}) => (
  <Fragment>
    <BorderInput
      withLabel
      name="title"
      value={title}
      onChange={handleInputChange}
      placeholder="Title"
      focus
    />
    <Label value="Type" />
    <Select
      value={type}
      onChange={value => handleSelectChange(value, 'type')}
      options={columnTypesSelectOptions}
    />
    {submitError && !title.length && (
      <ErrorMessage className="margin-8" message="Provide a title" />
    )}
  </Fragment>
);

ColumnForms.propTypes = {
  title: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  submitError: PropTypes.bool,
  handleSelectChange: PropTypes.func.isRequired,
  type: PropTypes.oneOfType([PropTypes.node, PropTypes.shape()]),
};
ColumnForms.defaultProps = {
  title: '',
  submitError: false,
  type: null,
};

export default ColumnForms;
