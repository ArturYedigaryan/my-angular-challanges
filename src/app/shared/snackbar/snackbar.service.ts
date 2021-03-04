import {Injectable} from '@angular/core';
import {BehaviorSubject, of, Subject} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService{
  isShow: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  message: BehaviorSubject<string> = new BehaviorSubject<string>('');

  callSnackbar(message: string): void {
    this.isShow.next(true);
    this.message.next(message);
    const subscription = of(null)
      .pipe(
        delay(2900)
      ).subscribe({
        complete: () => {
          this.isShow.next(false);
          this.message.next('');
          subscription.unsubscribe();
        }
      });
  }
}
