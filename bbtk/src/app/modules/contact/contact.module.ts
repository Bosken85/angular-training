import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './contact.module.routes';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { SubmitformComponent } from './submitform/submitform.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactComponent, FormComponent, SubmitformComponent]
})
export class ContactModule { }
