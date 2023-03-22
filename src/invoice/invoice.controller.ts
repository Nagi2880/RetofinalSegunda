import { InvoiceService } from "./invoice.service";
import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { Invoice } from "./invoice.dto";

@Controller('invoice')
export class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService){}
    
    //Route to get all invoices localhost:3000/invoice/getallinvoices
    @Get('getallinvoices')
    async findAll(): Promise<Invoice[]>{
        return this.invoiceService.findAll();
    }

    @Post()
    async create(@Body() invoice: Invoice){
        this.invoiceService.create(invoice);
    }

    @Put(':customerId')
    async update(@Param('customerId') customerId: number, @Body() invoice: Invoice): Promise<boolean>{
        return this.invoiceService.update(customerId, invoice);
    }

    @Delete(':customerId')
    async delete(@Param('customerId') customerId: number): Promise<boolean>{
        return this.invoiceService.delete(customerId);
    }
}