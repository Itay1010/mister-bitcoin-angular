import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/modules/main.module';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact!: Contact
  ngOnInit(): void {
  }

  onDelete(contactId: string) {
    console.log(contactId)
  }

}
