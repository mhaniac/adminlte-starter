import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';


@NgModule({
  declarations: [
    AddCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
