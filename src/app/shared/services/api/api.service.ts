import { Injectable } from '@angular/core';
import { MenuItem } from '../../models/menu/menu-item';
import { Observable } from 'rxjs';
import { ApiBaseService } from './api.base';

@Injectable()
export class ApiService implements ApiBaseService {
  getMainMenu(): Observable<MenuItem[]> {
    throw new Error('Method not implemented.');
  }
}
