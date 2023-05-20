import {Customer } from "../entity/Customer";
import { AppDataSource } from "../data-source";


const customerRepository = AppDataSource.getRepository(Customer);

export const getAllCustomers = async (): Promise<Customer[]> => {
    const allCustomers = await customerRepository.find();
    return allCustomers;
}

export const createCustomer = async ({name,email,phone}): Promise<Customer> => {
    const customer = new Customer();
    customer.name = name;
    customer.email = email;
    customer.phone = phone;
    
    await customerRepository.save(customer);
    return customer;
}