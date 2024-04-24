import express from "express";
import controller from "../controllers/userController.js";
import trimRequest from "trim-request";
import validation from "../validations/userValidation.js";

const router = express.Router();

router
  .route("/signup")
  .post(
    trimRequest.all,
    validation.userValidation(),
    validation.validate,
    controller.createNewUser
  );

router
  .route("/login")
  .post(
    trimRequest.all,
    validation.userLoginValidation(),
    validation.validate,
    controller.login
  );

export default router;
