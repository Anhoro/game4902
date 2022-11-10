import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-markers',
  templateUrl: './action-markers.component.html',
  styleUrls: ['./action-markers.component.scss']
})
export class ActionMarkersComponent implements OnInit {
  actionMarkers: Array<{id: number, isActive: boolean, title: string}> = [
    {id: 1, isActive: true, title: 'action 1'},
    {id: 2, isActive: true, title: 'action 2'},
    {id: 3, isActive: true, title: 'action 3'},
    {id: 4, isActive: true, title: 'action 4'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
