import express from "express";
import { getData, logout_ } from "../controller/profileController.js";

const routes = express.Router();

// get routes
routes.get("/", getData);
routes.get("/signout", logout_);

export default routes;
