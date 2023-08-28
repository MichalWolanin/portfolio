import { Component } from '@angular/core';

@Component({
  selector: 'app-ip-address-tracker',
  templateUrl: './ip-address-tracker.component.html',
  styleUrls: ['../../../../css/project.scss']
})
export class IpAddressTrackerComponent {

  openURL(url: string) {
    window.open(url, "")
  }
}
