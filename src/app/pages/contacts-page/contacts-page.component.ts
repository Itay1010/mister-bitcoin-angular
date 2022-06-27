import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/modules/contact.module';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  contacts!: Array<Contact>

  async ngOnInit(): Promise<void> {
    this.contactService.contacts$.subscribe(contacts => this.contacts = contacts)
    if (!this.contacts.length) this.contactService.loadContacts()

  }

}
