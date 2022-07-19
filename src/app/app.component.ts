import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SidebarService } from './shared/services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private _sidebarService: SidebarService
  ) {}

  ngOnInit(): void {
    this.router.events
    .pipe(
      filter( ( event: any ) => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null  ),
      map( (event: ActivationEnd) => event.snapshot.data )
    ).
    subscribe( ( { title } ) =>{
      this._sidebarService.pageTitle = title;
    });
  }

}
