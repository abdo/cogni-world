const validate = require('validate.js');

module.exports = data => {
  console.log(data);
  const error =
    validate.isEmpty(data.firstName) ||
    validate.isEmpty(data.lastName) ||
    validate.isEmpty(data.password) ||
    validate.isEmpty(data.email) ||
    validate.single(data.email, { email: true }) ||
    !isCognitevEmail(data.email);

  console.log({
    message: 'Incorrect form fields',
    isValid: !!error,
  });
  return {
    message: 'Incorrect form fields',
    isValid: !error,
  };
};

const isCognitevEmail = email => {
  const hostStartIndex = email.indexOf('@');
  const hostEndIndex = email.lastIndexOf('.');
  const host = email.slice(hostStartIndex + 1, hostEndIndex);
  console.log(host);
  return host.toLowerCase() === 'cognitev';
};
