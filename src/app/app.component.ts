import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../css/app.component.scss']
})

export class AppComponent {
  title = 'portfolio';

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'})
  }

  firstProject(url: string) {
    window.open(url, "http://www.psppotokwielki.pl/")
  }

  secondProject(url: string) {
    window.open(url, "https://michalwolanin.github.io/planes/login")
  }
}



