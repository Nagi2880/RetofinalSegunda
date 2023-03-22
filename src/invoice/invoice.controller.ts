import { InvoiceService } from "./invoice.service";
import { Controller, Get, Post, Body } from '@nestjs/common';
import { Invoice } from "./invoice.dto";

@Controller('invoice')
export class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService){}
    //Route to get all customers localhost:3000/invoices/getallinvoices
    @Get('getallinvoices')
    async findAll(): Promise<Invoice[]>{
        return this.invoiceService.findAll();
    }
    @Post()
    async create(@Body() customer: Invoice){
        this.invoiceService.create(customer);
    }
}

