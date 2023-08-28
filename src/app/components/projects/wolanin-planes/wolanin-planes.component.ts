import { Component } from '@angular/core';

@Component({
  selector: 'app-wolanin-planes',
  templateUrl: './wolanin-planes.component.html',
  styleUrls: ['../../../../css/project.scss']
})
export class WolaninPlanesComponent {

  openURL(url: string) {
    window.open(url, "")
  }
}
