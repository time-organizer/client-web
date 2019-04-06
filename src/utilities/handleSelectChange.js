function handleSelectChange(value, name) {
  this.setState({ [name]: value.value });
}

export default handleSelectChange;
