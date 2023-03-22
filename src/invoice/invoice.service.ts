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
}
