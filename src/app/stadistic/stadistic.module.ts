import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StadisticRoutingModule } from './stadistic-routing.module';
import { MainStadisticsComponent } from './pages/main-stadistics/main-stadistics.component';


@NgModule({
  declarations: [
    MainStadisticsComponent
  ],
  imports: [
    CommonModule,
    StadisticRoutingModule
  ]
})
export class StadisticModule { }
