import { Component, inject } from '@angular/core';
import { MenuService } from './menu.service';
import { Observable } from 'rxjs';
import { MenuItem } from '@shared/models/menu/menu-item';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'main-menu',
  imports: [AsyncPipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menuService = inject(MenuService);

  get items$(): Observable<MenuItem[]> {
    return this.menuService.getItems();
  }
}
