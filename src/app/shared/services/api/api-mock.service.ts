import { Injectable } from '@angular/core';
import { ApiBaseService } from './api.base';
import { MenuItem } from '../../models/menu/menu-item';
import { Observable, of } from 'rxjs';

@Injectable()
export class ApiMockService implements ApiBaseService {
  getMainMenu(): Observable<MenuItem[]> {
    return of([
      { name: 'Single player', path: 'game-panel' },
      { name: 'Multi player', path: 'game-panel' },
      { name: 'Scoreboard', path: 'scoreboard' },
      { name: 'Settings', path: 'settings' },
    ]);
  }
}
