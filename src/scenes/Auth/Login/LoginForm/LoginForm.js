import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input';
import ErrorMessage from '../../../components/Input/ErrorMessage';

const LoginForm = ({
  handleInputChange, onSubmit, errorMessage, values,
}) => (
  <div className="auth-form">
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
    <ErrorMessage message={errorMessage} />
    <div className="form-button-wrapper">
      <Button onClick={onSubmit}>
        LOGIN
      </Button>
    </div>
    <Link to="/auth/sign-up">
      <div className="form-text-button">
        {'Don\'t have account?'}
      </div>
    </Link>
  </div>
);

LoginForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  values: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
};

LoginForm.defaultProps = {
  errorMessage: '',
};

export default LoginForm;
