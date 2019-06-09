import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  BorderInput, ErrorMessage, Label, Select,
} from '../../../../../common_components';
import { defaultLabelColor, labelColorsSelectOptions } from '../../../utilities/labelColors';
import Row from '../../../../../common_components/Row';
import Col from '../../../../../common_components/Col';
import { columnsWidths } from '../../../../../common_components/Col/Col';

const LabelForms = ({
  handleInputChange,
  handleSelectChange,
  title,
  submitError,
  color,
  startingDate,
  endingDate,
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
          value={endingDate}
          placeholder="Ending date"
          withLabel
          type="date"
          name="endingDate"
        />

      </Col>
    </Row>
    <Label value="Color" />
    <Row>
      <Col desktopWidth={columnsWidths.W50} mobileWidth={columnsWidths.W100}>
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
  </Fragment>
);

LabelForms.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  submitError: PropTypes.bool,
  color: PropTypes.string,
  startingDate: PropTypes.string,
  endingDate: PropTypes.string,
};
LabelForms.defaultProps = {
  title: '',
  submitError: false,
  color: defaultLabelColor,
  startingDate: '',
  endingDate: '',
};

export default LabelForms;
