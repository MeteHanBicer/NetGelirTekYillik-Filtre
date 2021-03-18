import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetgelirtekyillikComponent } from './netgelirtekyillik/netgelirtekyillik.component';

@NgModule({
  declarations: [
    AppComponent,
    NetgelirtekyillikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
