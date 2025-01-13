import { Observable } from 'rxjs';
import { MenuItem } from '../../models/menu/menu-item';

export interface ApiBaseService {
  getMainMenu(): Observable<MenuItem[]>;
}
