import mongoose from "mongoose";

const Schema = mongoose.Schema;

//Making User Schema
var userSchema = new Schema({
  email: { type: String, index: true, unique: true, required: true },
  password: { type: String, required: true },
  userType: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  // education: { type: String, required: true },
  // address: { type: String, required: true },
});

const users = mongoose.model("users", userSchema);

// exporting user schema
export default users;
