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
}
