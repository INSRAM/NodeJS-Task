import express from "express";
import { body } from "express-validator";
import { createUser, loginUser } from "../controller/userController.js";

const routes = express.Router();
// Post routes

routes.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  createUser
);
routes.post(
  "/signin",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  loginUser
);

export default routes;
