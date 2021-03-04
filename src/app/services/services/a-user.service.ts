import {Observable} from 'rxjs';
import {User} from '../model/user.class';

export abstract class AUserService {
  abstract getUserById(id: number): Observable<User>;

}
