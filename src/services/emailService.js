const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'singarapujaya2003@gmail.com',
    pass: 'qkbr jzdf vrjh saqk'
  }
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'singarapujaya2003@gmail.com',
    to,
    subject,
    text
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
