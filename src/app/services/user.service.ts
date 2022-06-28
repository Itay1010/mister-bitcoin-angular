import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Contact, Move, User } from '../modules/main.module';
import { StorageService } from './storage.service';


const STORAGE_KEY = 'user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService: StorageService) { }

  isLogin = false

  checkIsLogin() {
    const user = this.isLogin || this.getFromStorage()
    this.isLogin = !!user
    return this.isLogin
  }

  getUser() {
    const user = this.getFromStorage()
    this.isLogin = !!user
    return of(user)
  }

  signup(name: string) {
    const newUser = new User(name)
    this.saveToStorage(newUser)
    this.isLogin = true
  }
  transferCoin(diff: number, contactInfo: { name: string, _id: string }) {
    const user = this.getFromStorage()
    const newMove = new Move(contactInfo._id, contactInfo.name, Date.now(), diff)
    user.coins += diff
    user.moves.unshift(newMove)
    this.saveToStorage(user)
  }

  getFromStorage(): User {
    return this.storageService.loadFromStorage(STORAGE_KEY)
  }

  saveToStorage(newUser: User) {
    return this.storageService.saveToStorage(STORAGE_KEY, newUser)
  }

}
