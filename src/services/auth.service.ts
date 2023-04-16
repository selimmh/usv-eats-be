import { User, IUser } from "../models/user.model";

export const createUser = async (
  name: string,
  email: string,
  password: string
): Promise<IUser> => {
  const user = await User.create({ name, email, password });
  return user;
};

export const getUserByEmail = async (email: string): Promise<IUser | null> => {
  const user = await User.findOne({ email });
  return user;
};
