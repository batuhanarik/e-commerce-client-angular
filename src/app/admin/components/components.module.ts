import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { LayoutModule } from '../layout/layout.module';
import { CustomerModule } from './customer/customer.module';
@NgModule({
  declarations: [OrderComponent, CustomerComponent],
  imports: [
    CommonModule,
    ProductsModule,
    OrderModule,
    CustomerModule,
    LayoutModule,
  ],
})
export class ComponentsModule {}
