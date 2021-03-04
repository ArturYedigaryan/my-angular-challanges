import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ComponentDocumentationComponent} from './component-documentation/component-documentation.component';
import {AccordionComponent} from './accordion/accordion.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {StarRatingsComponent} from './star-ratings/star-ratings.component';
import {COMPONENT_ROUTES} from './component.routes';
import {CardModule} from '../shared/card/card.module';
import { CreditCardInputComponent } from './credit-card-input/credit-card-input.component';
import {LoaderModule} from '../shared/loader/loader.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TwitterPostComponent } from './twitter-post/twitter-post.component';
import { LinkedInPostComponent } from './linked-in-post/linked-in-post.component';
import { QuoteComponent } from './quote/quote.component';
import { ToggleComponent } from './toggle/toggle.component';
import { RichTextViewerComponent } from './rich-text-viewer/rich-text-viewer.component';
import { DebounceSearchComponent } from './debounce-search/debounce-search.component';
import { SearchListComponent } from './search-list/search-list.component';
import {SharedPipesModule} from '../shared/shared-pipes/shared-pipes.module';
import { CounterComponent } from './counter/counter.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { PagingComponent } from './paging/paging.component';
import { SortTableComponent } from './sort-table/sort-table.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { RibbonComponent } from './ribbon/ribbon.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { BannerCutOutComponent } from './banner-cut-out/banner-cut-out.component';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import {FooterModule} from '../shared/footer/footer.modul';
import {TabsModule} from '../shared/tabs/tabs.module';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { SocialMediaBarComponent } from './social-media-bar/social-media-bar.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { PillComponent } from './pill/pill.component';
import { PillFiltersComponent } from './pill-filters/pill-filters.component';
import { PasswordComponent } from './password/password.component';
import { OverlayComponent } from './overlay/overlay.component';
import {ModalModule} from '../shared/modal/modal.module';



@NgModule({
  declarations: [
    ComponentDocumentationComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
    LinkedInPostComponent,
    QuoteComponent,
    ToggleComponent,
    RichTextViewerComponent,
    DebounceSearchComponent,
    SearchListComponent,
    CounterComponent,
    SimpleTableComponent,
    PagingComponent,
    SortTableComponent,
    EmailFormComponent,
    RibbonComponent,
    ButtonToggleComponent,
    BannerCutOutComponent,
    SimplePopupComponent,
    CountdownTimerComponent,
    SkeletonLoaderComponent,
    SocialMediaBarComponent,
    BottomSheetComponent,
    FieldsetComponent,
    PillComponent,
    PillFiltersComponent,
    PasswordComponent,
    OverlayComponent,
  ],
    exports: [
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(COMPONENT_ROUTES),
    CardModule,
    LoaderModule,
    FormsModule,
    SharedPipesModule,
    ReactiveFormsModule,
    FooterModule,
    TabsModule,
    ModalModule
  ]
})
export class ComponentModule { }
