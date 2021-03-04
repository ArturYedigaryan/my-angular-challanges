import {Observable, of} from 'rxjs';
import {User} from '../model/user.class';
import {AUserService} from './a-user.service';

export class UserServiceMock implements AUserService {
  lastId: number = null;
  user = new User();
  getUserById(id: number): Observable<User> {
    this.lastId = id;
    return of(this.user);
  }
}
