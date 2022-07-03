import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { Contact, Move, User } from '../modules/main.module';
import { StorageService } from './storage.service';


const STORAGE_KEY = 'user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService: StorageService) { }

  private isLogin: boolean = false
  private _user = new BehaviorSubject<User | null>(null)
  public user: Observable<User | null> = this._user.asObservable()

  checkIsLogin() {
    const user = this.isLogin || this.getFromStorage()
    this.isLogin = !!user
    return this.isLogin
  }

  loadUser() {
    const user = this.getFromStorage()
    this._user.next(user)
    return this.user
  }

  signup(name: string) {
    const newUser = new User(name)
    this.saveToStorage(newUser)
    this._user.next(newUser)
  }

  async transferCoin(diff: number, contactInfo: { name: string, _id: string }) {
    const user = this.getFromStorage()
    const newMove = new Move(contactInfo._id, contactInfo.name, Date.now(), Math.abs(diff))
    user.coins += diff
    user.moves.unshift(newMove)
    this.saveToStorage(user)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this._user.next(user)
        resolve(null)
      }, 1500)
    })
  }

  getFromStorage(): User {
    return this.storageService.loadFromStorage(STORAGE_KEY)
  }

  saveToStorage(newUser: User) {
    return this.storageService.saveToStorage(STORAGE_KEY, newUser)
  }

}
