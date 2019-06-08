import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NewLabel from './NewLabel';
import { toggleNewLabelForm } from '../../../../../../generalActions';

const NewLabelContainer = ({ onToggleNewLabelForm }) => (
  <NewLabel
    toggleNewLabelForm={onToggleNewLabelForm}
  />
);

NewLabelContainer.propTypes = {
  onToggleNewLabelForm: PropTypes.func.isRequired,
};
NewLabelContainer.defaultProps = {};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onToggleNewLabelForm: () => dispatch(toggleNewLabelForm()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLabelContainer);
