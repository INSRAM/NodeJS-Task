import express from "express";
import "dotenv/config";
import get_ from "./routes/get_routes.js";
import post_ from "./routes/post_routes.js";
import update_ from "./routes/patch_routes.js";
import delete_ from "./routes/delete_routes.js";
import AppError from "./utils/apperror.js";
import { globalHandler } from "./controller/errorController.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";
const app = express();
const __dirname = path.resolve();
app.use(bodyParser.json());
app.use(cookieParser());

// app.use(express.static(__dirname + "/view"));

// Environmental file Variable
const port = process.env.Port || 3000;
const URI = process.env.MONGODB_URL;

// connection with MongoDB
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

// calling route
app.use("/", get_);
app.use("/", post_);
app.use("/", update_);
app.use("/", delete_);

// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });
app.use(globalHandler);

// App Listen Port
app.listen(port, () => {
  console.log("Server is running on port:", port);
});
