import express from "express";
import funcs from "../controller/checkingmw.js";
import { checkUsertype, getData } from "../controller/mongomw.js";

const routes = express.Router();

routes.get("/", funcs.checkCookie, checkUsertype, getData, (req, res) => {
  res.status(200).send("Data send successfully!");
});

routes.get("/signout", funcs.logout_, (req, res) => {
  res.status(200).send("Logout Successfully!");
});

routes.get("/hello", funcs.checker);
export default routes;
