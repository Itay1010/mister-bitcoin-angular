import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  saveToStorage<T>(key: string, val: T) {
    var json = JSON.stringify(val)
    localStorage.setItem(key, json)
  }

  loadFromStorage(key: string) {
    const json = localStorage.getItem(key)
    const val = JSON.parse(json!)
    return val
  }
}
