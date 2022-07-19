import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private _menu: Menu[] = [];

  get menu() {
    return this._menu;
  }

  constructor() {
    setTimeout(() => {
      this._menu = [
        {
          title: 'Estadística',
          childs: null,
          label: null,
          icon: null,
          routerLink: null,
        },
        {
          title: null,
          label: 'Dashboard',
          routerLink: '',
          icon: 'nav-icon fas fa-chart-line',
          childs: null,
        },
        {
          title: 'Usuarios',
          childs: null,
          label: null,
          icon: null,
          routerLink: null,
        },
        {
          title: null,
          label: 'Clientes',
          routerLink: null,
          icon: 'nav-icon fas fa-users',
          childs: [
            {
              label: 'Agregar nuevo',
              title: null,
              routerLink: '',
              icon: null,
              childs: null,
            },
            {
              label: 'Gestionar',
              title: null,
              routerLink: '',
              icon: null,
              childs: null,
            },
          ],
        },
        {
          title: null,
          label: 'Empleados',
          routerLink: null,
          icon: 'nav-icon fas fa-user-tie',
          childs: [
            {
              label: 'Agregar nuevo',
              title: null,
              routerLink: '',
              icon: null,
              childs: null,
            },
            {
              label: 'Gestionar',
              title: null,
              routerLink: '',
              icon: null,
              childs: null,
            },
            {
              label: 'Roles',
              title: null,
              routerLink: '',
              icon: null,
              childs: null,
            },
          ],
        },
        {
          title: 'Reportes',
          childs: null,
          label: null,
          icon: null,
          routerLink: null,
        },
        {
          title: null,
          label: 'Generar',
          routerLink: '',
          icon: 'nav-icon fas fa-file-pdf',
          childs: null,
        },
        {
          title: 'Configuración',
          childs: null,
          label: null,
          icon: null,
          routerLink: null,
        },
        {
          title: null,
          label: 'General',
          routerLink: '',
          icon: 'nav-icon fas fa-cogs',
          childs: null,
        },
        {
          title: null,
          label: 'Seguridad',
          routerLink: '',
          icon: 'nav-icon fas fa-lock',
          childs: null,
        },
      ];
    
    }, 2000);
  }
}
