import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidarionErrors(err: ValidationError): Errors {
  const validarionErrors: Errors = {};

  err.inner.forEach((error) => {
    validarionErrors[error.path] = error.message;
  });

  return validarionErrors;
}
