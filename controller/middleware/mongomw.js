import users from "../../model/userSchema.js";
import { validationResult } from "express-validator";

// user creating with validation
async function createUser(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const userfind = await users.findOne({ email: req.body.email });
    if (userfind === null) {
      users.create(req.body, (err, collection) => {
        if (err) {
          return res.status(500).send(err);
        }

        next(); //  calling next
      });
    } else {
      return res.status(500).json({ errors: "Email already exist" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

// user login
async function loginUser(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // finding user from database

    const userfind = await users.findOne(req.body);
    if (userfind === null) return res.status(500).send("User not found").end();
  } catch (error) {
    res.status(500).send(error).end();
  }
  next();
}

// Update User
async function updateInfo(req, res, next) {
  try {
    var condition = { email: req.body.email };
    users.findOneAndUpdate(
      condition,
      req.body,
      { upsert: true },
      (err, doc) => {
        if (err) return res.status(204).send("Issue in Updating data!");
        return res.status(200).send("Updated Successfully!");
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
}

// delete User
async function deleteUser(req, res, next) {
  // res.send("Welcome to delete");
  try {
    var condition = { email: req.body.email };
    users.deleteOne(condition, (err, doc) => {
      if (err) return res.status(204).send("Issue in Deleting data!");
      return res.status(200).send("Deleted Successfully!");
    });
  } catch (error) {
    res.status(500).send(error);
  }
}

// get data
async function getData(req, res, next) {
  var body_ = req.body;

  if (body_.usertype === "user") {
    const userfind = await users.findOne({ email: body_.cookie_mail });
    if (!userfind) {
      return res.status(500).send("user does not exist");
      // next();
    } else {
      return res.status(200).send(JSON.stringify(userfind));
    }
  } else {
    users.find({}, function (err, users_) {
      console.log("these are users", users_);
      return res.status(200).send(JSON.stringify(users_));
    });
  }
}

// get user type
async function checkUsertype(req, res, next) {
  var cookieMail = req.body.cookie_mail;

  try {
    const userfind = await users.findOne({ email: cookieMail });
    if (!userfind) {
      return res.status(500).send("user does not exist");
      // next();
    } else {
      req.body.usertype = userfind.userType;
      next();
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

export {
  createUser,
  loginUser,
  updateInfo,
  deleteUser,
  getData,
  checkUsertype,
};
