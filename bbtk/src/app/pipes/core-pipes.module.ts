import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StarsPipe } from './stars.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TruncatePipe, StarsPipe],
  exports: [TruncatePipe, StarsPipe]
})
export class CorePipesModule { }
