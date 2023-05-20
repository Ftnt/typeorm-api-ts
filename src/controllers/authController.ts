import { Request, Response } from "express";
import { getUserByUsername } from "../services/userService";
import { comparePassword } from "../utils/passwordUtil";
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET:string = process.env.JWT_SECRET;

export const login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
    const user = await getUserByUsername(username);
    if (!user) {
        res.status(401).json({ message: 'User not found' });
        return;
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
        res.status(401).json({ message: 'Invalid password' });
        return;
    }

    const token = jwt.sign({user:user.id}, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
}
