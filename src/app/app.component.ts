import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    {
      title: 'NEO - Near Earth Object',
      url: '/neo',
    },
    {
      title: 'Tech Trasnfer',
      url: '/tech-transfer',
    },
    {
      title: 'TLE Data',
      url: '/tle',
    },
    {
      title: 'Insight - Mars Weather Data',
      url: '/insight',
    },
  ];

  constructor() {}
}
