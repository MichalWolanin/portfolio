import { Component } from '@angular/core';

@Component({
  selector: 'app-minutes-for-spine',
  templateUrl: './minutes-for-spine.component.html',
  styleUrls: ['../../../../css/project.scss']
})
export class MinutesForSpineComponent {

  openURL(url: string) {
    window.open(url, "")
  }
}
