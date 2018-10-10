import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input';
import ErrorMessage from '../../../components/Input/ErrorMessage';


const SignUpForm = ({
  handleInputChange, onSubmit, values, errorMessage, formErrors,
}) => (
  <div className="auth-form">
    <Input
      name="name"
      placeholder="Name"
      type="text"
      value={values.name}
      onChange={handleInputChange}
    />
    <Input
      name="email"
      placeholder="Email"
      type="text"
      value={values.email}
      onChange={handleInputChange}
    />
    <Input
      name="password"
      placeholder="Password"
      type="password"
      value={values.password}
      onChange={handleInputChange}
    />
    {formErrors.map(error => (
      <ErrorMessage key={error} message={error} />
    ))}
    <ErrorMessage message={errorMessage} />
    <div className="form-button-wrapper">
      <Button onClick={onSubmit}>
        SUBMIT
      </Button>
    </div>
    <Link to="/auth/login">
      <div className="form-text-button">
        Already have an account?
      </div>
    </Link>
  </div>
);

SignUpForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  values: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  formErrors: PropTypes.arrayOf(PropTypes.string),
};

SignUpForm.defaultProps = {
  errorMessage: '',
  formErrors: [],
};

export default SignUpForm;
