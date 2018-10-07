import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewBoardForm from './NewBoardForm';
import { toggleNewBoardForm } from '../../../../../generalActions';

const NewBoardFormContainer = ({ onToggleNewBoardForm }) => (
  <NewBoardForm onToggleNewBoardForm={onToggleNewBoardForm} />
);

NewBoardFormContainer.propTypes = {
  onToggleNewBoardForm: PropTypes.func.isRequired,
};
NewBoardFormContainer.defaultProps = {};

function mapDispatchToProps(dispatch) {
  return {
    onToggleNewBoardForm: () => dispatch(toggleNewBoardForm()),
  };
}

export default connect(null, mapDispatchToProps)(NewBoardFormContainer);
