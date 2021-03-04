import {Component, OnInit} from '@angular/core';
import {SnackbarService} from './shared/snackbar/snackbar.service';
import {TitleService} from './services/services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    public snackbarService: SnackbarService,
    public titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.initializeTitleService();
  }

}
