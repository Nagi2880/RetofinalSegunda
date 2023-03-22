import { Controller, Get, Post, Body, Put, Delete,Param } from '@nestjs/common';
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
    @Put(':id')
    async update(@Param('id') id: number, @Body() customer: Customer): Promise<boolean>{
        return this.customerService.update(id, customer);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<boolean>{
        return this.customerService.delete(id);
    }
}