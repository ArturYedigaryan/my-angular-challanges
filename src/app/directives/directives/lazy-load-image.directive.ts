import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: 'img[appLazyLoadImage]'
})
export class LazyLoadImageDirective implements AfterViewInit, OnDestroy{
  @HostListener('attr.src') srcAttribute = null;
  @Input() src: string;
  observer: IntersectionObserver;

  constructor(
    private element: ElementRef,
    @Inject('Window') window: Window
    ) {}

  ngAfterViewInit(): void {
    console.log(this.src);
    if (this.canLazyLoad()) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            this.loadImage();
            this.observer.unobserve(this.element.nativeElement);
          }
        });
      });
      this.observer.observe(this.element.nativeElement);
    } else {
      this.loadImage();
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  loadImage(): void {
    this.srcAttribute = this.src;
  }

  canLazyLoad(): boolean {
    return window && window.hasOwnProperty('IntersectionObserver');
  }

}
