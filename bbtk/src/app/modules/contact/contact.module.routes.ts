import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { SubmitformComponent } from './submitform/submitform.component';
import { ContactResolverService } from './contact-resolver.service';

export const routes: Routes = [
    {
        path: '', component: ContactComponent,
        children: [
            { path: '', component: FormComponent, resolve: { form: ContactResolverService } },
            { path: 'submit', component: SubmitformComponent }
        ]
    }
];
