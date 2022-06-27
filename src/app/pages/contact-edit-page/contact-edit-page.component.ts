import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/modules/contact.module';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  contact!: Contact

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      this.contact = contact || this.contactService.getEmptyContact()
    })
  }

  onSubmit(form: NgForm) {
    if (this.contact._id) form.value._id = this.contact._id
    this.contactService.saveContact(form.value)
    this.router.navigateByUrl('/contact')
  }

}
