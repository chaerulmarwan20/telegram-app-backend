require("dotenv").config();

// Env
const host = process.env.HOST;
const port = process.env.PORT;

// Package
const express = require("express");
const morgan = require("morgan");
const socket = require("socket.io");
const cors = require("cors");

const http = require("http");

const app = express();
const httpServer = http.createServer(app);

// Socket.io
const io = socket(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Client connected by id " + socket.id);

  let count = 0;
  socket.on("sendMessage", (data) => {
    socket.broadcast.emit("reqMessage", count + " " + data);
    count++;
    console.log(data);
  });

  socket.on("disconnect", (reason) => {
    console.log("Client disconnect " + reason);
  });
});

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

httpServer.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
