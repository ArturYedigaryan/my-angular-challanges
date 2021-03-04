import {ServiceDocumentationComponent} from './service-documentation.component';
import {UserServiceMock} from '../../services/user.service.mock';
import {AUserService} from '../../services/a-user.service';

describe(ServiceDocumentationComponent.name, () => {


  describe('General', () => {
    let service: ServiceDocumentationComponent;
    let userService: AUserService;
    beforeEach(() => {
      userService = new UserServiceMock();
      service = new ServiceDocumentationComponent( userService as any, null, null, null);
    });
  });
});
