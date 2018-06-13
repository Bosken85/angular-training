import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RepeatListItemDirective } from './repeat-list-item.directive';
import { RepeatListComponent } from './repeat-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RepeatListComponent, RepeatListItemDirective],
  exports: [RepeatListComponent, RepeatListItemDirective]
})
export class RepeatListModule { }
