import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URI = process.env.DB_URI || "";

const connection = mongoose
  .connect(DB_URI)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

export function dbConnect() {
  return connection;
}
