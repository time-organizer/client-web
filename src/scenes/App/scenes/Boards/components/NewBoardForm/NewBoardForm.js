import React from 'react';
import PropTypes from 'prop-types';

import Popup from '../../../../../components/Popup';

const NewBoardForm = ({ onToggleNewBoardForm }) => (
  <Popup onClose={onToggleNewBoardForm} />
);

NewBoardForm.propTypes = {
  onToggleNewBoardForm: PropTypes.func.isRequired,
};
NewBoardForm.defaultProps = {};

export default NewBoardForm;