import express from "express";
import { logout_, checkCookie } from "../middleware/checkingmw.js";
import { checkUsertype, getData } from "../middleware/mongomw.js";

const routes = express.Router();

routes.get("/", checkCookie, checkUsertype, getData, (req, res) => {
  res.status(200).send("Data send successfully!");
});

routes.get("/signout", logout_, (req, res) => {
  res.status(200).send("Logout Successfully!");
});

export default routes;
