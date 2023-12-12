import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menuItem';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent {

  @Input() menuName: string = '';
  @Input() shadows: boolean = false;
  @Input() popText: boolean = false;
  @Input() items_menu: MenuItem[] = [];

  constructor() {}

}
