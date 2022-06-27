import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/modules/contact.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  contact!: Contact

  ngOnInit(): void {
    try {
      this.route.data.subscribe(data => {
        this.contact = data['contact']
      })
    } catch (error) {
      console.error(error)
    }
  }

  onDelete() {
    this.contactService.deleteContact(this.contact._id as string)
    this.router.navigateByUrl('/contact')
  }

}
