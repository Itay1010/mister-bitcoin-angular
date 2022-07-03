import { Component, Input, OnInit } from '@angular/core';
import { Move } from "src/app/modules/main.module";
@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  constructor() { }
  @Input() title: string | undefined
  @Input() moveList!: Array<Move>

  ngOnInit(): void {
  }
}
