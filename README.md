<h1 align="center">Backend - Telegram</h1>
<p align="center">
  <a href="https://chatting-telegram.netlify.app/" target="_blank"><img src="./images/Telegram.png"  width="400" alt="Telegram" border="0" /></a>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Endpoint](#endpoint)
- [Installation](#installation)
- [Related Project](#related-project)

## Introduction

The Telegram app is a chat application that allows users to send messages to other users in realtime. This application was built for a week with the main tools namely express, mysql, react, and socket.io.

## Features

- Realtime chatting using socket.io

- Realtime online/offline status using socket.io

- Realtime notification using socket.io

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

## Prerequisites

- [NodeJs](https://nodejs.org/en/download/)
- [XAMPP](https://www.apachefriends.org/index.html)

## Endpoint

- User

|  METHOD  |                          API                          |
| :------: | :---------------------------------------------------: |
|  `GET`   |                     /api/v1/users                     |
|  `GET`   |                /api/v1/users/find-one                 |
|  `GET`   |              /api/v1/users/find-user/:id              |
|  `POST`  |                     /api/v1/users                     |
|  `GET`   |               /api/v1/users/auth/verify               |
|  `PUT`   |                   /api/v1/users/:id                   |
|  `POST`  |               /api/v1/users/auth/login                |
|  `POST`  |          /api/v1/users/auth/forgot-password           |
|  `PUT`   |           /api/v1/users/auth/reset-password           |
| `DELETE` |                   /api/v1/users/:id                   |
|  `GET`   |     /api/v1/users/messages/:idSender/:idReceiver      |
|  `GET`   | /api/v1/users/messages/:idSender/:idTarget/:idMessage |
|  `GET`   |               /api/v1/users/socket/:id                |

## Installation

1. Open your terminal or command prompt. Then, clone the repository `git clone https://github.com/chaerulmarwan20/telegram-app-backend.git`
2. Create database named `telegram-app` and import `telegram-app.sql` from this repository
3. Go to directory `cd telegram-app-backend`
4. Install all required packages `npm install`
5. Create a new file named `.env`, add it's content from `.env.example`
6. Run server `npm run dev'

## Related Project

- :white_check_mark: [`Frontend Telegram`](https://github.com/chaerulmarwan20/telegram-app)
- :rocket: [`Production`](https://chatting-telegram.netlify.app/)
