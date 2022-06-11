import jwt from "jsonwebtoken";
import AppError from "../utils/apperror.js";
import users from "../model/userSchema.js";

// checking cookie
const checkCookie = (token) => {
  try {
    var result = jwt.verify(token, process.env.key);
    return result;
  } catch (error) {
    return error;
  }
};

// checking usertype
async function checkUsertype(user_email, next) {
  try {
    const userfind = await users.findOne({ email: user_email });
    if (!userfind) {
      return next(new AppError("user does not exist", 500));
      //   return res.status(500).send("user does not exist");
    }

    return userfind.userType;
  } catch (error) {
    return next(new AppError(error, 500));
  }
}

const returningUserData = async (user_email, user_type, req, res, next) => {
  //   console.log("this is user", req.cookies.token);
  //   res.status(200).send("everry thing fine");
  try {
  } catch (error) {}
  if (user_type === "admin") {
    users.find({}, function (err, users_) {
      return res.status(200).send(JSON.stringify(users_));
    });
  } else if (user_type === "user") {
    const userfind = await users.findOne({ email: user_email });
    if (!userfind) {
      return next(new AppError("user does not exist", 500));
    } else {
      return res.status(200).send(JSON.stringify(userfind));
    }
  } else {
    return next(new AppError("Incorrect information", 500));
  }
};

// getting data
async function getData(req, res, next) {
  // calling checkCookie function
  var cookie_result = checkCookie(req.cookies.token);
  if (!cookie_result.email) return next(new AppError(cookie_result, 500));

  //   var user_type = await checkUsertype("kdfjs@dsd.com", next);
  var user_type = await checkUsertype(cookie_result.email, next);
  if (user_type !== undefined)
    returningUserData(cookie_result.email, user_type, req, res, next);
}

function logout_(req, res, next) {
  res.cookie("token", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ status: "success" });
}
export { getData, logout_ };
