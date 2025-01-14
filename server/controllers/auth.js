const User = require("../models/user-model");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, email, password, number } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      number,
    });

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        number: newUser.number,
        
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async(req, res) => {
  try {
    const {email, password} = req.body;
    const userexist = await User.findOne({email});  
    if(!userexist){
      return res.status(400).json({message:"User not found"});
    }

    const isPasswordValid = await bcrypt.compare(password, userexist.password);
    if(!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: userexist._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: userexist._id,
        name: userexist.name,
        email: userexist.email,
      }
    });
    
  } catch (error) {
    res.status(500).json({ message: "Internal server error" }); 
  }
}

const user = async(req, res) => {
  try {
    const userdata = req.user;
    console.log(userdata);
    return res.status(200).json({userdata});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}



module.exports = { register, login, user };
