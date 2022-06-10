import express from "express";
import { body, validationResult } from "express-validator";
import { bodyCheck, signCookie, logout_ } from "../middleware/checkingmw.js";
import { createUser, loginUser } from "../middleware/mongomw.js";

const routes = express.Router();

routes.post(
  "/signup",
  bodyCheck,
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  createUser,
  signCookie,
  (req, res) => {
    res.status(200).send("Successfull Added!");
  }
);
routes.post(
  "/signin",
  bodyCheck,
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  loginUser,
  signCookie,
  (req, res) => {
    res.status(200).send("Successfull Login!");
  }
);

export default routes;
