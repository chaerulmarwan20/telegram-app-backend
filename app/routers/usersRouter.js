const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("../middlewares/multer");
const auth = require("../middlewares/auth");

router
  .get("/", auth.verification(), usersController.findAll)
  .get("/find-one", auth.verification(), usersController.findOne)
  .get("/find-user/:id", auth.verification(), usersController.findUser)
  .post("/", multer.uploadImage.single("image"), usersController.create)
  .get("/auth/verify", usersController.verify)
  .post("/auth/login", usersController.login)
  .post("/auth/forgot-password", usersController.forgotPassword)
  .put("/auth/reset-password", usersController.resetPassword)
  .put(
    "/:id",
    auth.verification(),
    multer.uploadImage.single("image"),
    usersController.update
  )
  .delete("/:id", auth.verification(), usersController.delete)
  .get(
    "/messages/:idSender/:idReceiver",
    auth.verification(),
    usersController.findMessages
  )
  .delete(
    "/messages/:idSender/:idReceiver",
    auth.verification(),
    usersController.deleteMessages
  )
  .delete("/socket/:id", auth.verification(), usersController.deleteSocket);

module.exports = router;
