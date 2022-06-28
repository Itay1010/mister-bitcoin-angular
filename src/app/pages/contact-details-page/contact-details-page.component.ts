import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact, User } from 'src/app/modules/main.module';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(private contactService: ContactService, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  contact!: Contact
  user!: User

  ngOnInit(): void {
    try {
      this.userService.getUser().subscribe(user => this.user = user)
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
