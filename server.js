require("dotenv").config();

// Env
const host = process.env.HOST;
const port = process.env.PORT;

// Package
const express = require("express");
const morgan = require("morgan");
const socket = require("socket.io");
const cors = require("cors");
const moment = require("moment");

moment.locale("id");

const http = require("http");
const path = require("path");

// Router
const router = require("./app/routers");

const app = express();
const httpServer = http.createServer(app);

// Socket.io
const io = socket(httpServer, {
  cors: {
    origin: "*",
  },
});

const usersModel = require("./app/models/usersModel");

io.on("connection", (socket) => {
  console.log(`Client connected by id ${socket.id}`);
  let idUser = null;
  socket.on("initialLogin", async (id) => {
    console.log(`user:${id}`);
    idUser = id;
    const dataSocket = {
      idUser: id,
      idSocket: socket.id,
    };
    await usersModel.createUserSocket(dataSocket);
    io.emit("login", id);
    socket.join(`user:${id}`);
  });

  socket.on("sendMessage", async (data, callback) => {
    const date = new Date();
    const dayNow = moment(date).format("dddd");
    const timeNow = moment(date).format("LT");
    const message = { ...data, time: timeNow, day: dayNow };
    const sendInput = {
      message: message.message,
      time: `${message.day}. ${message.time}`,
      senderId: message.senderId,
      targetId: message.receiverId,
      type: "send",
    };
    const targetInput = {
      message: message.message,
      time: `${message.day}. ${message.time}`,
      senderId: message.receiverId,
      targetId: message.senderId,
      type: "receive",
    };
    await usersModel.createMessage(sendInput);
    await usersModel.createMessage(targetInput);
    const getMessagesSender = await usersModel.findMessages(data.senderId);
    const getMessagesTarget = await usersModel.findMessages(data.receiverId);
    const result = [...getMessagesSender, ...getMessagesTarget];
    io.to(`user:${data.receiverId}`).emit("recMessage", result);
    callback(result);
  });

  socket.on("initialLogout", (id) => {
    io.emit("logout", id);
  });

  socket.on("disconnect", async (reason) => {
    await usersModel.deleteUserSocket(idUser);
    io.emit("logout", idUser);
    console.log(`Client disconnect from ${reason}`);
  });
});

app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1", router);

app.use("*", (req, res, next) => {
  const err = new Error("Page not found");
  next(err);
});

app.use((err, req, res, next) => {
  if (err.message === "Uploaded file must be png, jpg or jpeg file") {
    res.status(400).send({
      status: false,
      message: err.message,
    });
  } else if (err.code === "LIMIT_FILE_SIZE") {
    res.status(400).send({
      status: false,
      message: "File image too large",
    });
  } else {
    res.status(404).send({
      status: false,
      message: err.message,
    });
  }
});

httpServer.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
