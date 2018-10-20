import React from 'react';
import PropTypes from 'prop-types';

import Popup from '../../../../../components/Popup';
import BorderInput from '../../../../../components/BorderInput';
import PopupFooter from '../../../../../components/Popup/components/PopupFooter';
import ErrorMessage from '../../../../../components/ErrorMessage';
import boardThemes from '../../utilities/boardThemes';
import BoardThemeBlock from './components/BoardThemeBlock';

import './NewBoardForm.css';

const NewBoardForm = ({
  onToggleNewBoardForm, values, changeBoardTheme, handleInputChange, formErrors, submitForm,
}) => {
  const { title, boardTheme: chosenTheme } = values;
  return (
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
          />
          {formErrors.map(formError => (
            <ErrorMessage message={formError} />
          ))}
        </div>
        <div className="new-board-form-section scrollable">
          {boardThemes.map(boardTheme => (
            <BoardThemeBlock
              key={boardTheme.key}
              boardTheme={boardTheme}
              chosenTheme={chosenTheme}
              changeBoardTheme={changeBoardTheme}
            />
          ))}
        </div>
      </div>
    </Popup>
  );
};

NewBoardForm.propTypes = {
  onToggleNewBoardForm: PropTypes.func.isRequired,
  values: PropTypes.shape({
    title: PropTypes.string,
    boardTheme: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
  changeBoardTheme: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  formErrors: PropTypes.arrayOf(PropTypes.string),
  submitForm: PropTypes.func.isRequired,
};

NewBoardForm.defaultProps = {
  formErrors: [],
};

export default NewBoardForm;
