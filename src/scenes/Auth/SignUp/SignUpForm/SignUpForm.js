import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button';

const SignUpForm = ({ handleInputChange, onSubmit, errorMessage }) => (
  <div>
    <input
      name="name"
      placeholder="Name"
      type="text"
      onChange={handleInputChange}
    />
    <input
      name="email"
      placeholder="Email"
      type="text"
      onChange={handleInputChange}
    />
    <input
      name="password"
      placeholder="Password"
      type="password"
      onChange={handleInputChange}
    />
    <Button onClick={onSubmit}>
      Submit
    </Button>
    {errorMessage}
  </div>
);

SignUpForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

SignUpForm.defaultProps = {
  errorMessage: '',
};

export default SignUpForm;
