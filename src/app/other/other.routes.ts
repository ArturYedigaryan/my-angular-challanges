import {Routes} from '@angular/router';
import {OtherDirectionComponent} from './components/other-direction/other-direction.component';
import {FormDirtyGuard} from './guards/form-dirty.guard';

export const OTHER_ROUTES: Routes = [
  {path: '', component: OtherDirectionComponent, canDeactivate: [FormDirtyGuard]}
];
