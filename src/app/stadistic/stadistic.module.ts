import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StadisticRoutingModule } from './stadistic-routing.module';
import { MainStadisticsComponent } from './pages/main-stadistics/main-stadistics.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainStadisticsComponent
  ],
  imports: [
    CommonModule,
    StadisticRoutingModule,
    SharedModule
  ]
})
export class StadisticModule { }
