import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/Button';

const LoginForm = ({ handleInputChange, onSubmit, errorMessage }) => (
  <div className="form login-form">
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

LoginForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  errorMessage: '',
};

export default LoginForm;
