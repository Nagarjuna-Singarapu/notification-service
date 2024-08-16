// src/controllers/notificationController.js
const { sendEmail: sendPrimaryEmail } = require('../services/emailService');
const { sendEmail: sendBackupEmail } = require('../services/backupEmailService');

let retryCount = 0;

const sendNotification = async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await sendPrimaryEmail(to, subject, text);
    retryCount = 0; // Reset retry count on success
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Primary email service error:', error);
    retryCount++;
    if (retryCount >= 3) {
      try {
        await sendBackupEmail(to, subject, text);
        retryCount = 0; // Reset retry count on success
        res.status(200).send('Email sent successfully via backup service');
      } catch (backupError) {
        console.error('Backup email service error:', backupError);
        res.status(500).send('Failed to send email via both primary and backup services');
      }
    } else {
      res.status(500).send('Failed to send email, retrying...');
    }
  }
};

module.exports = { sendNotification };
