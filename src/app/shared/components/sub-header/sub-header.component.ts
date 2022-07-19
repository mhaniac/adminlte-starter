import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent implements OnInit {

  get pageTitle() {
    return this._sidebarSerivice.pageTitle;
  }

  constructor(
    private _sidebarSerivice: SidebarService
  ) {}

  ngOnInit(): void {
  }
}
