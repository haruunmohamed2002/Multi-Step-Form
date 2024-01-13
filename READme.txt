# Multi-Step-Form

# Description
This project consists of a React front-end for collecting user information through a multi-step form and an Express back-end for sending a confirmation email using Nodemailer. The form is divided into three steps: Sign Up, Personal Info, and Other Info. Upon completion, a confirmation email is sent to the provided email address.

# Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js and npm installed on your machine.
A Gmail account to be used for sending confirmation emails.
Basic knowledge of React and Express.

# Installation

## Clone the repository to your local machine:
https://github.com/haruunmohamed2002/Multi-Step-Form

## Navigate to the project directory:
cd your-project

## Clone the client and server submodules:
git submodule init
git submodule update

## Install dependencies for both the client and server:
## Install server dependencies
cd server
npm install

### Install client dependencies
cd client
npm install


# Usage
### Set up Gmail account credentials for Nodemailer:

### Open server/index.js.
Replace 'your-email@gmail.com' with your Gmail address.
Replace 'your-email-password' with your Gmail password. It is recommended to use an "App Password" for security.

### Open server/index.js.
Replace 'your-email@gmail.com' with your Gmail address.
Replace 'your-email-password' with your Gmail password. It is recommended to use an "App Password" for security.

### Start the server:
npm start

Start the React client:
npm start

Open your browser and go to http://localhost:3000 to view the application.

Complete the form, and upon submission, a confirmation email will be sent to the provided email address.

#Contributing
To contribute to this project, follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/new-feature).
Make your changes and commit them (git commit -m 'Add new feature').
Push to the branch (git push origin feature/new-feature).
Open a pull request.
