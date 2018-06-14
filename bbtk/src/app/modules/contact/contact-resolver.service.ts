import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService implements Resolve<any> {

  constructor(private contactService: ContactService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
    return this.contactService.getFormData();
  }
}
