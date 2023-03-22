import { Controller, Get, Post, Body } from '@nestjs/common';
import { Customer } from './customer.dto';
import { CustomerService } from './customer.service';
@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService){}
    //Route to get all customers localhost:3000/customer/getallcustomers
    @Get('getallcustomers')
    async findAll(): Promise<Customer[]>{
        return this.customerService.findAll();
    }
    @Post()
    async create(@Body() customer: Customer){
        this.customerService.create(customer);
    }
}
