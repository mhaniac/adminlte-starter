import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddCustomerComponent,
    data: {
      title: 'Registrar nuevo cliente',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
