<h1 align="center">Backend - Telegram</h1>
<p align="center">
  <a href="https://chatting-telegram.netlify.app/" target="_blank"><img src="./images/Telegram.png"  width="400" alt="Telegram" border="0" /></a>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Documentation](#documentation)
- [Link](#link)
- [Author](#author)

## Introduction

The Telegram app is a chat application that allows users to send messages to other users in realtime. This application was built for a week with the main tools namely express, mysql, react, and socket.io.

## Features

- Realtime chatting using socket.io

- Realtime online/offline status using socket.io

- Realtime notification using socket.io

- Realtime deleting message using socket.io

- JWT authentication

- Nodemailer for email verification

- Upload image using multer

- Form validation using joi

- CRUD for all tables required in the application

## Built With

- [ExpressJs](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- [Socket.io](https://socket.io/)
- [Nodemailer](https://nodemailer.com/)
- [Moment](https://momentjs.com/)
- [Joi](https://www.npmjs.com/package/joi)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Multer](https://www.npmjs.com/package/multer)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Ip](https://www.npmjs.com/package/ip)

## Prerequisites

- [NodeJs](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## Installation

1. Clone the repository

```
git clone https://github.com/chaerulmarwan20/telegram-app-backend.git
cd telegram-app-backend
```

2. Install package

```
npm install
```

3. Create a new database with a name `telegram-app` and import `telegram-app.sql` from this repository

4. Create .env file

```
# Host & Port
HOST=
PORT=
PORT_FRONTEND=

# Database
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=telegram-app

# Secret Key
SECRET_KEY=

# Email
EMAIL_USER=
EMAIL_PASS=
```

5. Run application

```
npm run dev
```

Or

```
npm start
```

## Documentation

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/11970262/TzXtJfmG)

## Link

- :white_check_mark: [`Frontend Telegram`](https://github.com/chaerulmarwan20/telegram-app)
- :rocket: [`Publication`](https://chatting-telegram.netlify.app/)

## Author

- [Chaerul Marwan](https://github.com/chaerulmarwan20)
