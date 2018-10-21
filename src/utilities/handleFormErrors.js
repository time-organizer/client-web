import remove from 'lodash/remove';
import uniq from 'lodash/uniq';

export function addFormError(error) {
  this.setState(previousState => ({
    formErrors: uniq([
      ...previousState.formErrors,
      error,
    ]),
  }));
}

export function removeFormError(error) {
  const formErrors = [...this.state.formErrors];

  remove(formErrors, formError => formError === error);

  this.setState(() => ({
    formErrors: [
      ...formErrors,
    ],
  }));
}
