const axios = require('axios');

const sendEmail = async (to, subject, text) => {
  const payload = {
    to,
    subject,
    text
  };

  return axios.post('https://api.backup-email-service.com/send', payload);
};

module.exports = { sendEmail };
