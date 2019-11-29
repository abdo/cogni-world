const validate = require('validate.js');

module.exports = data => {
  console.log(data);
  const error =
    validate.isEmpty(data.firstName) ||
    validate.isEmpty(data.lastName) ||
    validate.isEmpty(data.password) ||
    validate.isEmpty(data.email) ||
    validate.single(data.email, { email: true });

  console.log({
    message: 'Incorrect form fields',
    isValid: !!error,
  });
  return {
    message: 'Incorrect form fields',
    isValid: !error,
  };
};
