import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor() { }

  isMenuOpen: boolean = false

  navClass = {
    menuOpen: this.isMenuOpen
  }

  toggleChangeMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  closeMenu() {
    this.isMenuOpen = false
  }

  ngOnInit(): void {
  }

}
