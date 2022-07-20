import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MainDashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../stadistic/stadistic.module').then(
            (m) => m.StadisticModule
          ),
      },
      {
        path: 'customer',
        loadChildren: () =>
          import('../customer/customer.module').then((m) => m.CustomerModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
