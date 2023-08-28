import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { WolaninPlanesComponent } from './components/projects/wolanin-planes/wolanin-planes.component';
import {IpAddressTrackerComponent} from "./components/projects/ip-address-tracker/ip-address-tracker.component";
import { MinutesForSpineComponent } from './components/projects/minutes-for-spine/minutes-for-spine.component';
import { SklepRapidComponent } from './components/projects/sklep-rapid/sklep-rapid.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    WolaninPlanesComponent,
    IpAddressTrackerComponent,
    MinutesForSpineComponent,
    SklepRapidComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
