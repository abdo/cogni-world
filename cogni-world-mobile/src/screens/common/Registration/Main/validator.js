import validate from 'validate.js';

const constraints = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: {
      message: 'is invalid',
    },
  },
};

export default form => {
  let errors = validate(form, constraints);
  if (!form.email.includes('@cognitev.')) {
    if (!errors) {
      errors = { email: ['Email should be a Cognitev email'] };
    } else if (!errors.email) {
      errors.email = ['Email should be a Cognitev email'];
    } else {
      errors.email = [...errors.email, 'Email should be a Cognitev email'];
    }
  }
  return errors;
};
