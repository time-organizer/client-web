import React from 'react';
import PropTypes from 'prop-types';

import {
  Popup, BorderInput, ErrorMessage, PopupFooter,
} from '../../../../common_components';
import boardThemes from '../../utilities/boardThemes';
import BoardThemeBlock from './components/BoardThemeBlock';

import './NewBoardForm.css';

const NewBoardForm = ({
  onToggleNewBoardForm, title, chosenTheme, changeBoardTheme,
  handleInputChange, formErrors, submitForm,
}) => (
  <Popup
    onClose={onToggleNewBoardForm}
    title="Create new board"
    footer={(
      <PopupFooter cancel={onToggleNewBoardForm} accept={submitForm} />
    )}
  >
    <div className="new-board-form">
      <div className="new-board-form-section">
        <BorderInput
          onChange={handleInputChange}
          name="title"
          withLabel
          placeholder="Title"
          value={title}
          focus
        />
        {formErrors.map(formError => (
          <ErrorMessage key={formError} message={formError} />
        ))}
      </div>
      <div className="new-board-form-section scrollable">
        {boardThemes.map(boardTheme => (
          <BoardThemeBlock
            key={boardTheme.key}
            isSelected={boardTheme.key === chosenTheme}
            boardTheme={boardTheme}
            changeBoardTheme={changeBoardTheme}
          />
        ))}
      </div>
    </div>
  </Popup>
);

NewBoardForm.propTypes = {
  onToggleNewBoardForm: PropTypes.func.isRequired,
  title: PropTypes.string,
  chosenTheme: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  changeBoardTheme: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  formErrors: PropTypes.arrayOf(PropTypes.string),
  submitForm: PropTypes.func.isRequired,
};

NewBoardForm.defaultProps = {
  formErrors: [],
  title: '',
  chosenTheme: null,
};

export default NewBoardForm;
