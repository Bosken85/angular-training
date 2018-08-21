import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomFieldsModule } from '../../components/custom-fields/custom-fields.module';
import { routes } from './contact.module.routes';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { SubmitformComponent } from './submitform/submitform.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CustomFieldsModule
  ],
  declarations: [ContactComponent, FormComponent, SubmitformComponent]
})
export class ContactModule { }
