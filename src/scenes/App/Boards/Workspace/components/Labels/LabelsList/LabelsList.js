import React from 'react';
import PropTypes from 'prop-types';
import { buttonTypes } from '../../../../../../common_components/Button';
import { Button } from '../../../../../../common_components';

const LabelsList = ({ toggleNewLabelForm, withNewButton }) => (
  <div>
    {!!withNewButton && (
      <Button
        onClick={toggleNewLabelForm}
        buttonType={buttonTypes.UNDERLINED}
      >
        Add new label
      </Button>
    )}
  </div>
);

LabelsList.propTypes = {
  toggleNewLabelForm: PropTypes.func.isRequired,
  withNewButton: PropTypes.bool,
};
LabelsList.defaultProps = {
  withNewButton: false,
};

export default LabelsList;
