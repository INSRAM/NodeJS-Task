// import express from "express";
// import users from "../model/userSchema.js";
// import jwt from "jsonwebtoken";
// import path from "path";

// const __dirname = path.resolve();
// const router = express.Router();

// router.get("/signup", async (req, res) => {
//   res.send("Welcome to Signup page");
// });
// router.get("/login", async (req, res) => {
//   console.log(__dirname);
//   // res.redirect("/signup");
//   return res.sendFile(__dirname + "/view/index.html");
//   // res.sendFile(path.join(__dirname, "/index.html"));
//   // res.sendFile("../view/index.html", { root: __dirname });
//   // res.sendFile(path.join("../view/index.html"));
//   // return res.sendFile("../view/index.html").end();
//   // res.redirect("../view/index.html");
//   // const token = req.cookies.token;
//   // // console.log("this is token", token);
//   // if (!token) {
//   //   return res.send("token not fiund").end();
//   // }
//   // var payload = jwt.verify(token, process.env.key);
//   // console.log(payload);
//   // if (!payload._id) return res.send("token not match").end();
//   // let data = {
//   //   email: "email@lgmail.com",
//   //   password: "password",
//   // };
//   // const result = await users.create(
//   //   data
//   //   // , (err, collection) => {
//   //   // if (err) {
//   //   //   console.log("Error in inserting");
//   //   //   throw err;
//   //   //   // res.redirect("/signup");
//   //   // }
//   //   // console.log("inserted succesfully: ", err);
//   //   // res.redirect("/signIn");
//   //   // }
//   // );
//   // console.log("This is result", result);
//   // const userfind = await users.findOne({
//   //   email: "email@gmail.com",
//   //   password: "password",
//   // });
//   // if (userfind === null) throw "user not found";
//   // const userId_ = { _id: userfind._id };
//   // var token_ = jwt.sign(userId_, process.env.key);
//   // res.cookie("token", token_);
//   // jwt.verify(req.cookies.token, process.env.keyfunction, (err, decoded) => {
//   //   // if (decoded._id != null) {
//   //   //   res.send("Cookie not found");
//   //   // }
//   //   if (err) {
//   //     return res.send("cookie nor found").end();
//   //   }
//   // });
//   // var jans = jwt.verify(req.cookies.token, process.env.key);
//   // if (jans._id != undefined) {
//   //   res.send("World");
//   //   // console.log("every this is perfect");
//   // }
//   // ?
//   // console.log("this is decoded key", jans._id);
//   res.send("Hello World");
//   // : res.send("Cookie is not matched");
// });

// export default router;
