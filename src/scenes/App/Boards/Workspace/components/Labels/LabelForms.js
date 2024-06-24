import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  BorderInput, Button, buttonTypes, ErrorMessage, Label, Select,
} from '../../../../../common_components';
import { defaultLabelColor, labelColorsSelectOptions } from '../../../utilities/labelColors';
import Row from '../../../../../common_components/Row';
import Col from '../../../../../common_components/Col';
import { columnsWidths } from '../../../../../common_components/Col/Col';

const LabelForms = ({
  submitNewLabel,
  handleInputChange,
  handleSelectChange,
  title,
  submitError,
  color,
  startingDate,
  dueDate,
  conflict,
}) => (
  <Fragment>
    <BorderInput
      onChange={handleInputChange}
      value={title}
      name="title"
      withLabel
      placeholder="Title"
    />
    <Row>
      <Col desktopWidth={columnsWidths.W50} mobileWidth={columnsWidths.W100}>
        <BorderInput
          onChange={handleInputChange}
          value={startingDate}
          placeholder="Starting date"
          withLabel
          type="date"
          name="startingDate"
        />
      </Col>
      <Col desktopWidth={columnsWidths.W50} mobileWidth={columnsWidths.W100}>
        <BorderInput
          onChange={handleInputChange}
          value={dueDate}
          placeholder="Due date"
          withLabel
          type="date"
          name="dueDate"
        />
      </Col>
    </Row>
    <Label value="Color" />
    <Row>
      <Col desktopWidth={columnsWidths.W25} mobileWidth={columnsWidths.W25}>
        <Select
          onChange={value => handleSelectChange(value, 'color')}
          value={color}
          options={labelColorsSelectOptions}
        />
      </Col>
    </Row>
    {submitError && !title.length && (
      <ErrorMessage className="margin-8" message="Provide a title" />
    )}
    {submitError && !color.length && (
      <ErrorMessage className="margin-8" message="Choose a color" />
    )}
    {!!conflict && (
      <ErrorMessage className="margin-8" message="Label with that title already exists" />
    )}
    <Button
      onClick={submitNewLabel}
      buttonType={buttonTypes.SUBMIT}
    >
      Submit
    </Button>
  </Fragment>
);

LabelForms.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  submitError: PropTypes.bool,
  color: PropTypes.string,
  startingDate: PropTypes.string,
  dueDate: PropTypes.string,
  submitNewLabel: PropTypes.func.isRequired,
  conflict: PropTypes.bool.isRequired,
};
LabelForms.defaultProps = {
  title: '',
  submitError: false,
  color: defaultLabelColor,
  startingDate: '',
  dueDate: '',
};

export default LabelForms;
