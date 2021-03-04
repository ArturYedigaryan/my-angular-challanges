import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {APP_ROUTES} from './app.routes';

import {TopOfPageModule} from './shared/top-of-page/top-of-page.module';
import {ToolbarModule} from './shared/toolbar/toolbar.module';
import {SnackbarModule} from './shared/snackbar/snackbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot(APP_ROUTES),
    TopOfPageModule,
    ToolbarModule,
    SnackbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// ng config schematics.@schematics/angular:component.style scss --------- change css to --> scss
