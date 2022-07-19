import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onToggleMenuSidebar() {
    const body = document.querySelector('body');
    body?.classList.remove('sidebar-open');
    body?.classList.add('sidebar-closed', 'sidebar-collapse');
  }

}
