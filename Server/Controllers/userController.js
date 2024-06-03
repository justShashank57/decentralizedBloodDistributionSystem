import bcrypt from "bcrypt";
import { User } from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../Config/index.js";

//test route
export const testRoute = async (req, res) => {
  res.send("Mother Fucker!!!");
};

// User Signup Route
export const userSignup = async (req, res) => {
  const {
    firstName,
    lastName,
    bloodGroup,
    number,
    gender,
    email,
    password,
    street,
    state,
    city,
    pin,
    isDonor,
  } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please enter your email and password." });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user object
    const user = new User({
      firstName,
      lastName,
      bloodGroup,
      number,
      gender,
      email,
      password: hashedPassword,
      salt,
      street,
      state,
      city,
      pin,
      isDonor,
    });

    // Save user to database
    await user.save();

    // Generate a token
    if (!secretKey) {
      console.error("Secret key for JWT not provided.");
      return res.status(500).json({ message: "Internal server error." });
    }
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1d",
    });

    // Send success response
    res.status(201).json({
      message: "User signed up successfully.",
      token: token,
      user,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

//Login User Route
export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: "Invalid email or password." });
  }

  try {
    // Retrieve user by email
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({
        message: "Invalid login credentials. Please try again or sign up.",
      });
    }

    // Compare provided password with stored hash
    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordMatch) {
      return res
        .status(401)
        .json({ message: "Invalid login credentials. Please try again." });
    }

    // Generate a token
    if (!secretKey) {
      console.error("Secret key for JWT not provided.");
      return res.status(500).json({ message: "Internal server error." });
    }
    const token = jwt.sign({ userId: existingUser._id }, secretKey, {
      expiresIn: "1d",
    });

    // Send success response
    res.status(200).json({
      message: "User logged in successfully!",
      token: token,
      existingUser,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const searchDonor = async () => {};
