import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import {DIRECTIVE_ROUTES} from './directive.routes';
import {DirectiveDocumentationComponent} from './directive-documentation/directive-documentation.component';
import {CardModule} from '../shared/card/card.module';
import {DebounceClickDirective} from './directives/debounce-click.directive';
import {RippleDirective} from './directives/ripple.directive';
import {ScaleDirective} from './directives/scale.directive';
import {CopyDirective} from './directives/copy.directive';
import {LazyLoadImageDirective} from './directives/lazy-load-image.directive';
import {AutoFocusDirective} from './directives/auto-focus.directive';
import {ModalModule} from '../shared/modal/modal.module';

@NgModule({
  declarations: [
    DirectiveDocumentationComponent,
    DebounceClickDirective,
    RippleDirective,
    ScaleDirective,
    CopyDirective,
    LazyLoadImageDirective,
    AutoFocusDirective
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(DIRECTIVE_ROUTES),
        CardModule,
        ModalModule
    ],
  providers: [
    {provide: 'Navigator', useValue: navigator},
    {provide: 'Document', useValue: document},
    {provide: 'Window', useValue: window}
  ]
})
export class DirectiveModule { }
