import express from "express";
import { body } from "express-validator";
// import { bodyCheck, signCookie, logout_ } from "../controller/checkingmw.js";
import funcs from "../controller/checkingmw.js";
// import { createUser, loginUser } from "../controller/mongomw.js";
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
// // sign Up route
// routes.post(
//   "/signup",
//   funcs.bodyCheck,
//   body("email").isEmail(),
//   body("password").isLength({ min: 5 }),
//   createUser,
//   funcs.signCookie,
//   (req, res) => {
//     res.status(200).send("Successfull Added!");
//   }
// );

// // Sign In route
// routes.post(
//   "/signin",
//   funcs.bodyCheck,
//   body("email").isEmail(),
//   body("password").isLength({ min: 5 }),
//   loginUser,
//   funcs.signCookie,
//   (req, res) => {
//     res.status(200).send("Successfull Login!");
//   }
// );

export default routes;
