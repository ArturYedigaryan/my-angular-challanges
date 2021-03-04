import {Directive, HostListener, Inject, Input} from '@angular/core';
import {SnackbarService} from '../../shared/snackbar/snackbar.service';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {
  @Input() appCopy = '';

  constructor(
    @Inject('Navigator') public navigator: Navigator,
    @Inject('Document') public document: Document,
    public snackbarService: SnackbarService
  ) {
  }
  @HostListener('click')
  async copy(): Promise<void> {
    try {
      await this.navigator.clipboard.writeText(this.appCopy);
      this.document.execCommand('copy');
      this.snackbarService.callSnackbar('Copied Successful');
    } catch {
      this.snackbarService.callSnackbar('Copied Failed');
    }
  }
}
