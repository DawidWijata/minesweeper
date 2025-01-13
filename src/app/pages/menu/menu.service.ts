import { inject, Injectable } from '@angular/core';
import { MenuItem } from '@shared/models/menu/menu-item';
import { ApiService } from '@shared/services/api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  apiService = inject(ApiService);

  getItems(): Observable<MenuItem[]> {
    return this.apiService.getMainMenu();
  }
}
