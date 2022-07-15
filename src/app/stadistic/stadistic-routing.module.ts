import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainStadisticsComponent } from './pages/main-stadistics/main-stadistics.component';

const routes: Routes = [
  {
    path: '',
    component: MainStadisticsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StadisticRoutingModule { }
