import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

const SignUpForm = ({
  handleInputChange, onSubmit, values, errorMessage, formErrors,
}) => (
  <div>
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
    {
      formErrors.map(error => error)
    }
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
