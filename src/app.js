const express = require('express');
const bodyParser = require('body-parser');
const { sendNotification } = require('./controllers/notificationController');
console.log('sendNotification:', sendNotification);

const app = express();

app.use(bodyParser.json());

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'test.html'));
});

app.post('/send-notification', sendNotification);

module.exports = app;
