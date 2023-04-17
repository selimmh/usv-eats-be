import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
import * as yup from "yup";

export const userSchemaYup = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export interface IUser extends Document {
  email: string;
  password: string;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre<IUser>("save", async function (next) {
  try {
    const user = this;
    if (!user.isModified("password")) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    next();
  } catch (error) {
    return next(error as Error);
  }
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  try {
    const match = await bcrypt.compare(password, this.password);
    return match;
  } catch (error) {
    return false;
  }
};

export const User = mongoose.model<IUser>("user", userSchema);
