import jwt from "jsonwebtoken";
import users from "../model/userSchema.js";
import { validationResult } from "express-validator";
import AppError from "../utils/apperror.js";

// signing token
const signToken = (email) => {
  return jwt.sign({ email }, process.env.key);
};

// create token
const createSendToken = (req, res) => {
  const token_ = signToken(req.body.email);
  res.cookie("token", token_, {
    expires: new Date(Date.now() + 3000 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });

  res.status(200).json({
    status: "success",
    token_,
  });
};

// user creating with validation
async function createUser(req, res, next) {
  // checking body is empty or not
  if (Object.keys(req.body).length === 0) {
    return next(new AppError("Body is empty", 204));
  }

  //   validation of body
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new AppError(errors.array(), 400));
  }

  try {
    // checking user email is exist or not.
    const userfind = await users.findOne({ email: req.body.email });
    if (userfind === null) {
      users.create(
        { email: req.body.email, password: req.body.password },
        (err, collection) => {
          if (err) {
            // global error handler
            return next(new AppError(err, 500));
          }
          createSendToken(req, res);
        }
      );
    } else {
      return next(new AppError("Email already exist", 500));
    }
  } catch (error) {
    next(new AppError(error, 500));
  }
}

// User login
async function loginUser(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    return next(new AppError("Body is empty", 204));
  }

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new AppError(errors.array(), 400));
    }

    // finding user from database
    const userfind = await users.findOne(req.body);
    if (userfind === null) return next(new AppError("User not found", 500));

    // calling and assignning token
    createSendToken(req, res);
  } catch (error) {
    next(new AppError(error, 500));
    //   res.status(500).send(error).end();
  }
}

export { createUser, loginUser };
