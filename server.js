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
  console.log(`Client connected by id ${socket.id}`);

  socket.on("sendMessage", (data) => {
    io.emit("reqMessage", `${data} from id ${socket.id}`);
    console.log(data);
  });

  socket.on("disconnect", (reason) => {
    console.log(`Client disconnect from ${reason}`);
  });
});

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

httpServer.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
