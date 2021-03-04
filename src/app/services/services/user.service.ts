import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../model/user.class';
import {AUserService} from './a-user.service';

@Injectable()
export class UserService implements AUserService{
  readonly baseRoute = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseRoute}/${id}`)
      .pipe(
        map((value) => new User(value))
      );
  }
}
