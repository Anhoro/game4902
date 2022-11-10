import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-hand-card]',
  templateUrl: './hand-card.component.html',
  styleUrls: ['./hand-card.component.scss']
})
export class HandCardComponent implements OnInit {
  @Input() card!: {id: number, title: number};
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.card);
  }

}
