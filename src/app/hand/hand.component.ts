import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

  cards: Array<{ id: number, title: number}> = [
    {
      id: 1,
      title: 1
    },
    {
      id: 2,
      title: 2
    },
    {
      id: 8,
      title: 1
    },
    {
      id: 9,
      title: 7
    },
    {
      id: 10,
      title: 3
    },
    {
      id: 14,
      title: 4
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
