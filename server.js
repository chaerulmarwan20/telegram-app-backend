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
