import {Injectable} from '@angular/core';
import { CanDeactivate } from '@angular/router';
import {FormDirtyInterface} from './form-dirty.interface';

@Injectable({
  providedIn: 'root'
})
export class FormDirtyGuard implements CanDeactivate<FormDirtyInterface>{
  canDeactivate(component: FormDirtyInterface): boolean{
    if (component.form.dirty) {
      return confirm('Your form is dirty. Are you sure you want to leave?');
    }
    return true;
  }
}
