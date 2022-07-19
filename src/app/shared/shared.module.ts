import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './components/control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { RouterModule } from '@angular/router';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    SubHeaderComponent,
    BreadcrumbsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    SubHeaderComponent,
    BreadcrumbsComponent,
  ],
})
export class SharedModule {}
