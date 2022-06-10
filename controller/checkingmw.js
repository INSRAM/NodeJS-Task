import jwt from "jsonwebtoken";
import AppError from "../utils/apperror.js";
const funcs = {
  checker: (req, res, next) => {
    var i = 1;
    if (i === 0) {
      console.log("I am calling");
      return res.send("everything is fine");
      // return next();
    } else {
      next(new AppError("I am error", 300));
    }
  },
  // )
  // Request body checking
  bodyCheck: (req, res, next) => {
    var body_ = req.body;
    if (Object.keys(body_).length === 0) {
      next(new AppError("Body is empty", 204));
      // return res.status(204).send("Body is empty").end();
    }
    next();
  },

  // Clear Cookie
  logout_: (req, res, next) => {
    res.cookie("token", "", { expires: new Date(0) });
    next();
  },

  // Asigning Cookie
  signCookie: (req, res, next) => {
    var body_ = req.body;
    var data_ = {
      email: body_.email,
    };

    // token signing
    var token_ = jwt.sign(data_, process.env.key);
    res.cookie("token", token_);
    next();
  },

  // checking cookie
  checkCookie: (req, res, next) => {
    jwt.verify(req.cookies.token, process.env.key, (err, decoded) => {
      if (err) return res.status(400).json({ error: err });
      req.body.cookie_mail = decoded.email;
      next();
    });
  },
};
export default funcs;
// export { checkCookie, signCookie, bodyCheck, logout_ };
// export { bodyCheck, signCookie, logout_ };
