
import jwt from "jsonwebtoken";
import { Request, Response } from 'express';
import { decrypt, encrypt } from "../workers/crypt";

require('dotenv').config();

export const verifyToken = async (req: Request, res: Response, next: () => void) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ success: false, message: 'Authentication failed' });
    }
    try {
        const decoded = jwt.verify(token, process.env.KEY) as { id: string };
        req.body.UserID = await decrypt(decoded.id);
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Authentication failed' });
    }
};


export const createToken = async (id: string) => {
    try { 
        const token = jwt.sign({ id: await encrypt(id) }, process.env.KEY, { expiresIn: '24h' });
        return { success: true, token: token }
    } catch (error) {
        console.log(`createToken: ${error}`);
        return { success: false, message: 'Authentication failed' };
    }
}