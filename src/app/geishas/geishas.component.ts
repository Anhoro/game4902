import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geishas',
  templateUrl: './geishas.component.html',
  styleUrls: ['./geishas.component.scss']
})
export class GeishasComponent implements OnInit {

  geishas: Array<{id: number, title: number}> = [
    {
      id: 1,
      title: 1
    },
    {
      id: 2,
      title: 2
    },
        {
      id: 3,
      title: 3
    },
    {
      id: 4,
      title: 4
    },
    {
      id: 5,
      title: 5
    },
    {
      id: 6,
      title: 6
    },
    {
      id: 7,
      title: 7
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
