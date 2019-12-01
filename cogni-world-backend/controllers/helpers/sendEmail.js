const nodemailer = require('nodemailer');
const keys = require('../../keys.secret');

const sendEmail = ({ receiverEmail, subject, template }) => {
  let transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: keys.serviceEmail.email,
      pass: keys.serviceEmail.password,
    },
  });

  const message = {
    from: 'sender@gmail.com', // Sender address
    to: receiverEmail, // List of recipients
    subject: subject, // Subject line
    html: template,
  };

  transport.sendMail(message, function(err, info) {
    if (err) {
      console.log('Error while sending email');
      console.log(err);
    } else {
      console.log('Email sent');
      console.log(info);
    }
  });
};

module.exports = sendEmail;
