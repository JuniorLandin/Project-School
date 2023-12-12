import { Component } from '@angular/core';
import { every, filter, fromEvent, map } from 'rxjs';

import { MenuItem } from './shared/models/menuItem';
import { menuItems } from './shared/models/menu';
import { NavigationEnd, Router } from '@angular/router';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 60;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';
  public popText = false;
  public applyShadows = false;
  public items_menu: MenuItem[] = menuItems;
  public menuName = '';

  constructor(private router: Router){}

  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
    .pipe(
      map(() => content.scrollTop)
    )
    .subscribe({
      next: (value: number) => this.determineHeader(value)
    })

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => event as NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let moduleName = event.url.split('/')[1]
      
      this.menuName = this.items_menu.filter(
        (item: MenuItem) => item.link == `/${moduleName}`
      )[0].label
    })
  }

  determineHeader(top: number) {
    this.popText = top >= TEXT_LIMIT;
    this.applyShadows = top >= SHADOW_LIMIT;
    
  }

}
