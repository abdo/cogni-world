const keys = require('../../keys.secret');

const emailVerificationTemplate = ({ user }) => {
  const userName = user.firstName;
  const userToken = user.token;

  return `
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Verify Email</title>
    <style>
      button:focus {
        outline: 0;
      }
    </style>
  </head>
  <body>
    <h4 style="font-family: sans-serif;">
      Hi ${userName}<br /><br />
      Have you signed up into Cogni World? Please verify your email through this
      link:
    </h4>

    <a href="${keys.serverPath}/api/user/verify/${userToken}" target="_blank"
      ><button
        style="cursor:pointer;border-radius: 10px; height:30px;background-color: #8563DC;color:#fff;border:0"
      >
        Verify Account
      </button></a
    >
    <br /><br />
    <div>
      <img src="https://i.ibb.co/XWySpGs/logo-main.png" style="width:100px;" />
    </div>
  </body>
</html>
  `;
};

module.exports = emailVerificationTemplate;
