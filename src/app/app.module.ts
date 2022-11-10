import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandCardComponent } from './hand/hand-card/hand-card.component';
import { HandComponent } from './hand/hand.component';
import { DeckComponent } from './deck/deck.component';
import { GeishasComponent } from './geishas/geishas.component';
import { ActionMarkersComponent } from './action-markers/action-markers.component';
import { GeishaComponent } from './geishas/geisha/geisha.component';

@NgModule({
  declarations: [
    AppComponent,
    HandComponent,
    HandCardComponent,
    DeckComponent,
    GeishasComponent,
    GeishaComponent,
    ActionMarkersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
