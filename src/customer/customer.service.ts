import { Injectable } from '@nestjs/common';
import { Customer } from './customer.dto';
@Injectable()
export class CustomerService {
    private readonly customers: Customer[] = [];

    create(customer: Customer) {
        this.customers.push(customer)
    }
    
    async findAll(): Promise<Customer[]> {
        return this.customers;
      }
    
    async delete(id: number): Promise<boolean> {
        const index = this.customers.findIndex(customer => customer.id === id);
        if (index !== -1) {
            this.customers.splice(index, 1);
            return true;
        }
        return false;
    }

    async update(id: number, updatedCustomer: Customer): Promise<boolean> {
        const index = this.customers.findIndex(customer => customer.id === id);
        if (index !== -1) {
            this.customers[index] = updatedCustomer;
            return true;
        }
        return false;
    }
}
