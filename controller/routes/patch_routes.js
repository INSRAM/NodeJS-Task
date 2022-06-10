import express from "express";
import { updateInfo } from "../middleware/mongomw.js";
import { bodyCheck } from "../middleware/checkingmw.js";

const routes = express.Router();

//  Patch route for update data
routes.patch("/updatedata", bodyCheck, updateInfo);

export default routes;
