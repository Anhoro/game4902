import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-action-marker]',
  templateUrl: './action-marker.component.html',
  styleUrls: ['./action-marker.component.scss']
})
export class ActionMarkerComponent implements OnInit {
  actionMarker!: {id: number, isActive: boolean, title: string};

  constructor() { }

  ngOnInit(): void {
  }

}
