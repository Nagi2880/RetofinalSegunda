import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { InvoiceService } from './invoice/invoice.service';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [CustomerModule, InvoiceModule],
  controllers: [AppController],
  providers: [AppService, InvoiceService],
})
export class AppModule {}
