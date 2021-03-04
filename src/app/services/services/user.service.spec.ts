import {UserService} from './user.service';
import {HttpClientMock} from './http-client.mock';
import {User} from '../model/user.class';

describe(UserService.name, () => {
  it('exists', () => {
    // assert
    expect(UserService).toBeDefined();
  });

  describe('General', () => {
    let service: UserService;
    let http: HttpClientMock;

    beforeEach(() => {
      http = new HttpClientMock();
      service = new UserService(http as any);
    });

    describe('getUserById', () => {
      it('hits correct route with id', async () => {
        // arrange
        const id = 5;
        const correctUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
        http.lastUrl = null;

        // act
        await service.getUserById(id).toPromise();

        // assert
        expect(http.lastUrl).toBe(correctUrl);
      });

      it('is a GET call', async () => {
        // arrange
        http.lastHttpMethod = null;

        // act
        await service.getUserById(5).toPromise();

        // assert
        expect(http.lastHttpMethod).toBe('GET');
      });

      it('returns a User', async () => {
        // arrange
        http.response = {name: 'Dylan'};

        // act
        const result = await service.getUserById(5).toPromise();

        // assert
        expect(result).toBeInstanceOf(User);
        expect(result.name).toBe(name);
      });
    });
  });
});
