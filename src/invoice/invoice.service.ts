import { Injectable } from '@nestjs/common';
import { Invoice } from './invoice.dto';

@Injectable()
export class InvoiceService {
    private readonly invoices: Invoice[] = [];
    
    create(invoice: Invoice) {
        this.invoices.push(invoice)
    }

    async findAll(): Promise<Invoice[]> {
        return this.invoices;
    }

    async delete(customerId: number): Promise<boolean> {
        const index = this.invoices.findIndex(invoice => invoice.customer.some(c => c.id === customerId));
        if (index !== -1) {
            this.invoices.splice(index, 1);
            return true;
        }
        return false;
    }

    async update(customerId: number, updatedInvoice: Invoice): Promise<boolean> {
        const index = this.invoices.findIndex(invoice => invoice.customer.some(c => c.id === customerId));
        if (index !== -1) {
            this.invoices[index] = updatedInvoice;
            return true;
        }
        return false;
    }
}