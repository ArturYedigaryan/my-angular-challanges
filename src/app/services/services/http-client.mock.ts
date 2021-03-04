import {Observable, of} from 'rxjs';

export class HttpClientMock {
  lastUrl = '';
  lastOptions = null;
  response: { [key: string]: any };
  lastHttpMethod: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  get(url: string, options?: { [key: string]: any }): Observable<any>{
    this.lastUrl = url;
    this.lastOptions = options;
    this.lastHttpMethod = 'GET';
    return of(this.response);
  }
}
