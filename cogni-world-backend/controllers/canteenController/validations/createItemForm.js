const validate = require('validate.js');

module.exports = data => {
  const error = validate.isEmpty(data.name);

  return {
    message: 'Incorrect data provided',
    isValid: !error,
  };
};
