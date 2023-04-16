import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { createUser, getUserByEmail } from "../services/auth.service";
const JWT_SECRET = process.env.JWT_SECRET;

export const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const user = await createUser(name, email, password);
    const token = jwt.sign({ id: user._id }, JWT_SECRET as string, {
      expiresIn: "1h",
    });
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const match = await user.comparePassword(password);
    if (!match) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET as string);
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
