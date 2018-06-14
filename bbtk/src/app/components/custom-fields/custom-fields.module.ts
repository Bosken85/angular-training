import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GenderSelectComponent } from './gender-select/gender-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [GenderSelectComponent],
  exports: [GenderSelectComponent]
})
export class CustomFieldsModule { }
