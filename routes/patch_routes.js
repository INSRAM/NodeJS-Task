import express from "express";
import { updateInfo } from "../controller/mongomw.js";
import funcs from "../controller/checkingmw.js";

const routes = express.Router();

//  Patch route for update data
routes.patch("/updatedata", funcs.bodyCheck, updateInfo);

export default routes;
