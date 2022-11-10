import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-geisha]',
  templateUrl: './geisha.component.html',
  styleUrls: ['./geisha.component.scss']
})
export class GeishaComponent implements OnInit {
  @Input() geisha!: {id: number, title: number};

  constructor() { }

  ngOnInit(): void {
  }

}
