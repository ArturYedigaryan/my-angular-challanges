import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterTermPipe} from './filter-term.pipe';

@NgModule({
  declarations: [FilterTermPipe],
  imports: [CommonModule],
  exports: [FilterTermPipe]
})
export class SharedPipesModule {}
