import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    data: {title: 'Components'},
    path: '',
    loadChildren: () => import('./components/component.module').then(m => m.ComponentModule)},
  {
    data: {title: 'Services'},
    path: 'services',
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)},
  {
    data: {title: 'Directives'},
    path: 'directives',
    loadChildren: () => import('./directives/directive.module').then(m => m.DirectiveModule)
  },
  {
    data: {title: 'Pipes'},
    path: 'pipes',
    loadChildren: () => import('./pipes/pipe.module').then(m => m.PipeModule)},
  {
    data: {title: 'Others'},
    path: 'other',
    loadChildren: () => import('./other/other.module').then(m => m.OtherModule)},
  {
    path: '**',
    loadChildren: () => import('./shared/not-found/not-found.module').then(m => m.NotFoundModule)}

];
