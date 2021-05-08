import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.page.html',
  styleUrls: ['./insight.page.scss'],
})
export class InsightPage implements OnInit {
  apiKey: String = environment.apiKey;
  weatherData: any = [];
  pre: any = [];

  constructor(private http: HttpClient) {
    this.http
      .get(
        `https://api.nasa.gov/insight_weather/?api_key=${this.apiKey}&feedtype=json&ver=1.0`
      )
      .subscribe((data: any) => {
        // this.weatherData = data[861];
        // this.pre = data[861].PRE;
        console.log(data);
      });
  }

  ngOnInit() {}
}
