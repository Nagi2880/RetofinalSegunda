import { InvoiceDetail } from "./invoiceDetail.dto";
import {Customer} from "../customer/customer.dto";
export class Invoice {
    readonly customer: Customer[];
    readonly date: string;
    readonly invoiceDetails: InvoiceDetail[];
}
