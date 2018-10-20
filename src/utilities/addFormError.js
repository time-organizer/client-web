export default function addFormError(error) {
  this.setState(previousState => ({
    formErrors: [
      ...previousState.formErrors,
      error,
    ],
  }));
}
