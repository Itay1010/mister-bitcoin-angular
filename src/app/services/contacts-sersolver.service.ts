import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from '../modules/contact.module';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsResolverService implements Resolve<Promise<Contact>> {

  constructor(private contactService: ContactService) { }

  async resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params
    const contact = await lastValueFrom(this.contactService.getContactById(id))
    return contact
  }

}
