import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../services/authService";

// extendi la interface de request para que tenga el user
declare module 'express-serve-static-core' {
    interface Request {
        user?: string;
    }
}

export const authHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({ message: 'Authorization header is required' });
        return;
    }
    const token = authorization.split(' ')[1];
    try {
        const payload = await verifyToken(token);
        req.user = payload;
        next();
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}