const validate = require('validate.js');

module.exports = data => {
  const error =
    validate.isEmpty(data.email) ||
    validate.isEmpty(data.password) ||
    validate.single(data.email, { email: true }) ||
    !isCognitevEmail(data.email);

  return {
    message: 'Incorrect data provided',
    isValid: !error,
  };
};

const isCognitevEmail = email => {
  const hostStartIndex = email.indexOf('@');
  const hostEndIndex = email.lastIndexOf('.');
  const host = email.slice(hostStartIndex + 1, hostEndIndex);
  return host.toLowerCase() === 'cognitev';
};
