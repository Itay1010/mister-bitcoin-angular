import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../modules/contact.module';


const currUser: User = {
  name: "Jonathan Jostar",
  coins: 100,
  moves: []
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser() {
    return of(currUser)
  }
}
