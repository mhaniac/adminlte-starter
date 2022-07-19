import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
})
export class MainSidebarComponent implements OnInit {
  get userProfile() {
    return this._authService.userProfile;
  }

  get userInitialLetter() {
    return this._authService.initialLetter;
  }

  get companyName() {
    return environment.companyName;
  }

  get menu() {
    return this._sidebarService.menu;
  }

  constructor(
    private _sidebarService: SidebarService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {}
}
