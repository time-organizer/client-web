import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Boards from './Boards';

const BoardsContainer = ({ newBoardFormOpened }) => (
  <Boards
    newBoardFormOpened={newBoardFormOpened}
  />
);

BoardsContainer.propTypes = {
  newBoardFormOpened: PropTypes.bool.isRequired,
};
BoardsContainer.defaultProps = {};

function mapStateToProps({ general: { forms: { newBoardFormOpened } } }) {
  return {
    newBoardFormOpened,
  };
}

export default connect(mapStateToProps)(BoardsContainer);
