import * as jwt from "jsonwebtoken";
import { User } from "../entity/User";
import * as dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET: string = process.env.JWT_SECRET;

export const generateToken = (user: User): string => {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  const decoded: { userId: string } = jwt.verify(token, JWT_SECRET) as {
    userId: string;
  };
  const { userId } = decoded;
  return userId;
};
