# notification-service
## Project Overview
This project is a simple notification service built with Node.js and Express.js. It includes email retrying logic, where the system retries the primary email-sending service upon failure and switches to a backup service after three consecutive failed attempts.

## Project Structure
notification-service/
├── src/
│ ├── controllers/
│ │ └── notificationController.js
│ ├── services/
│ │ ├── emailService.js
│ │ └── backupEmailService.js
│ ├── app.js
│ ├── index.js
│ └── test.html
├── .gitignore
├── package.json
└── README.md


## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nagarjuna-Singarapu/Notification_Email_services.git
   cd notification-service

2. **Install dependencies:**
    ```bash
        npm install

3. **Start the server:**
    ```bash
    npm run dev

## API Endpoints

POST /send-notification

Description: Sends an email notification.
# Request Body:
{
  "to": "recipient@example.com",
  "subject": "Test Email",
  "text": "This is a test email."
}

Responses:
200 OK: Email sent successfully.
500 Internal Server Error: Failed to send email, retrying or failed to send email via both primary and backup services.

Testing

Using Postman

Open Postman:

If you don't have Postman installed, you can download it from here.
Create a New Request:

Set the request type to POST.
Enter the URL: http://localhost:3000/send-notification.
Set the Request Body:

Select Body and then raw.
Choose JSON from the dropdown.
Enter the following JSON data:
json
Copy Code
{
  "to": "recipient@example.com",
  "subject": "Test Email",
  "text": "This is a test email."
}
Send the Request:
Click the Send button.
Check the response to see if the email was sent successfully or if there was an error.

# Conclusion

This project demonstrates a simple notification service with email retrying logic and a fallback mechanism. The service is built with Node.js and Express.js, and it includes detailed logging and error handling to ensure reliable email delivery. By following the setup and testing instructions, you can easily run and test the notification service.
