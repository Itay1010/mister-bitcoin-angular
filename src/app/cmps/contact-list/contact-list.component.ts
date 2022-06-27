import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/modules/contact.module';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  @Input() contacts!: Array<Contact>

  ngOnInit(): void {
  }

}
