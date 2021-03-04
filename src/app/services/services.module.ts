import {NgModule} from '@angular/core';
import {ServiceDocumentationComponent} from './components/service-documentation/service-documentation.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SERVICES_ROUTES} from './services.routes';
import {CardModule} from '../shared/card/card.module';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {LocalStorageService} from './services/local-storage.service';

@NgModule({
  declarations: [
    ServiceDocumentationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SERVICES_ROUTES),
    HttpClientModule,
    CardModule
  ],
  providers: [
    UserService,
    LocalStorageService,
    {provide: 'LocalStorage', useValue: window.localStorage}
  ]
})
export class ServicesModule {
}
