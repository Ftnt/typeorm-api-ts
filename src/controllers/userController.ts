import {Request , Response} from "express";
import {create} from "../services/userService";

interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
  }

export const createUser = async (
    req:Request,
    res:Response
): Promise<User> => {
    try {
        const {username, password, email} = req.body;
        if(!username || !password || !email){
            res.status(400).json({error:"Los campos username, password y email son obligatorios."});
            return;
        }
        const newUser = await create({username, password, email});
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}