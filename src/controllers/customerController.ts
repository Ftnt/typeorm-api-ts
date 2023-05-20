import { Request, Response } from "express";
import { getAllCustomers, createCustomer } from "../services/customerService";

export const getCustomers = async (req:Request, res:Response): Promise<void> =>{
    const allCustomers = await getAllCustomers();
    res.send(allCustomers);
}

export const createCustomerController = async (req:Request, res:Response): Promise<void> =>{
    try {
        const { email, name, phone } = req.body;
        if (!email || !name || !phone) {
            res.status(400).json({ error: 'Los campos email, name y phone son obligatorios.' });
            return;
          }
        const newCustomer = await createCustomer({ email, name, phone });
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}