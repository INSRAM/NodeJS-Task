import express from "express";
import {
  verifyCookie,
  logout_,
  checkCookie,
} from "../middleware/checkingmw.js";
import { checkUsertype, getData } from "../middleware/mongomw.js";

const routes = express.Router();

routes.get("/", checkCookie, checkUsertype, getData, (req, res) => {
  res.send(JSON.stringify(req.body));
});

// routes.get("/home", verifyCookie, (req, res) => {
//   res.send(JSON.stringify(req.body));
// });
// routes.get("/login", verifyCookie, (req, res) => {
//   res.send("Welcome to Login").end();
// });
// routes.get("/signup", verifyCookie, (req, res) => {
//   res.send("Welcome to SignUp").end();
// });

routes.get("/signout", logout_, (req, res) => {
  res.status(200).send("Logout Successfully");
});

export default routes;
