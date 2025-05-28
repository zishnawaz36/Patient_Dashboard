import mongoConnect from "../Config/dbConnect.js";
import Patient from "../Model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register Controller
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Optional: check if user already exists
    const existingUser = await Patient.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const userCreate = await Patient.create({
      username,
      email,
      password: hashpassword,
      
    });

    res.status(201).json({ message: "User registered successfully", data: userCreate });
  } catch (error) {
    res.status(500).json({ message: "Error during registration", error: error.message });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usercheck = await Patient.findOne({ email });
    if (!usercheck) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const userPass = await bcrypt.compare(password, usercheck.password);
    if (!userPass) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: usercheck._id, role: usercheck.role },
      process.env.JWT_TOKEN,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error during login", error: error.message });
  }
};

// Logout Controller (Client-side responsibility in JWT)
const logout = async (req, res) => {
  // Since JWT is stateless, logout is handled on the client by deleting the token
  res.status(200).json({ message: "Logout successful (Client should delete token)" });
};

export { register, login, logout };
