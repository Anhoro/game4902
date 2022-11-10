import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  deck: Array<{id: number, title: number}> = [
    {id: 1, title: 1},
    {id: 2, title: 2},
    {id: 3, title: 7},
    {id: 4, title: 1},
    {id: 5, title: 5},
    {id: 6, title: 4},
    {id: 7, title: 3},
    {id: 8, title: 4},
    {id: 9, title: 2},
  ];
  deckLength = this.deck.length;

  constructor() { }

  ngOnInit(): void {
  }

}
