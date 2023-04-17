import { User, IUser } from "../models/user.model";
import jwt from "jsonwebtoken";
import { userSchemaYup } from "../models/user.model";

export const createUser = async (
  email: string,
  password: string
): Promise<IUser> => {
  await userSchemaYup.validate({ email, password }, { abortEarly: false });
  const user = await User.create({ email, password });
  return user;
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  const user = await User.findOne({ email });
  return user;
};

export const getCurrentUserWithToken = async (
  token: string
): Promise<IUser | null> => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as IUser;
  const user = await User.findById(decoded._id);
  return user;
};
