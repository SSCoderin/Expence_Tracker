const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function(next) {
  console.log("this is pre method", this);
  const user = this;
  
  if(!user.isModified("password")) {
    return next();
  }
  
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashPassword;
  } catch(error) {
    return next(error);
  }
});

userSchema.methods.createToken = async function() {
  try {
    return jwt.sign(
      {
        userid: this._id.toString(),
        email: this.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "10d"
      }
    );
  } catch(error) {
    console.error(error);
    throw error;
  }
};
  
const User = mongoose.model("user", userSchema);
module.exports = User;