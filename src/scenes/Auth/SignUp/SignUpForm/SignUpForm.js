import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/Button';

const SignUpForm = ({ handleInputChange, onSubmit }) => (
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
      type="text"
      onChange={handleInputChange}
    />
    <Button onClick={onSubmit}>
      Submit
    </Button>
  </div>
);

SignUpForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
