import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/UserModel.js";

const createNewUser = async (req, res) => {
  const data = req.body;
  const salt = await bcrypt.genSalt(10);
  let securePass = await bcrypt.hash(data.password, salt);
  try {
    await userModel.create({
      name: data.name,
      email: data.email,
      password: securePass,
      location: data.location,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
const login = async (req, res) => {
  const data = req.body;
  try {
    let userData = await userModel.findOne({
      email: data.email,
    });
    console.log(userData);
    console.log(process.env.JWT_SECRET_KEY);
    if (!userData) {
      return res.status(400).json({ error: "User Not Found" });
    }

    const compPass = await bcrypt.compare(data.password, userData.password);
    if (!compPass) {
      return res.status(400).json({ error: "Invalid Password" });
    }

    const payload = {
      user: {
        id: userData.id,
      },
    };
    let authToken = await jwt.sign(payload, process.env.JWT_SECRET_KEY);

    res.json({ success: true, authToken: authToken });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
export default { createNewUser, login };
