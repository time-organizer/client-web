import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleNewBoardForm } from '../../../../../../generalActions';

import NewBoardButton from './NewBoardButton';

const NewBoardButtonContainer = ({ onToggleNewBoardForm }) => (
  <NewBoardButton onToggleNewBoardForm={onToggleNewBoardForm} />
);

NewBoardButtonContainer.propTypes = {
  onToggleNewBoardForm: PropTypes.func.isRequired,
};
NewBoardButtonContainer.defaultProps = {};

function mapDispatchToProps(dispatch) {
  return {
    onToggleNewBoardForm: () => dispatch(toggleNewBoardForm()),
  };
}

export default connect(null, mapDispatchToProps)(NewBoardButtonContainer);
