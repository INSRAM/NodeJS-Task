import express from "express";
import { deleteUser } from "../controller/mongomw.js";

const routes = express.Router();

// Delete route
routes.delete("/deleteuser", deleteUser);

export default routes;