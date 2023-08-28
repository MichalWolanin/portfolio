import { Component } from '@angular/core';

@Component({
  selector: 'app-sklep-rapid',
  templateUrl: './sklep-rapid.component.html',
  styleUrls: ['../../../../css/project.scss']
})
export class SklepRapidComponent {

  openURL(url: string) {
    window.open(url, "")
  }
}
