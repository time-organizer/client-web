import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

const LoginForm = ({
  handleInputChange, onSubmit, errorMessage, values,
}) => (
  <div className="form login-form">
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
    <Button className="pull-right" onClick={onSubmit}>
      LOGIN
    </Button>
    {errorMessage}
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
