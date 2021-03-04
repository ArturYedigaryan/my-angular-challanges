import {Directive, EventEmitter, HostListener, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy{
  @Output() debounceClick = new EventEmitter();
  clicks = new Subject();
  subscription: Subscription;

  ngOnInit(): void {
    const debounceTimeInMs = 500 ;
    this.subscription = this.clicks.pipe(
      debounceTime(debounceTimeInMs)
    ).subscribe(value => this.debounceClick.emit(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next();
  }

}
