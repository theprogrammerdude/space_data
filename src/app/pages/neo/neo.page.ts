import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-neo',
  templateUrl: './neo.page.html',
  styleUrls: ['./neo.page.scss'],
})
export class NeoPage implements OnInit {
  apiKey: String = environment.apiKey;
  neo: any = [];

  constructor(private http: HttpClient, private router: Router) {
    this.http
      .get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${this.apiKey}`)
      .subscribe((data: any) => {
        this.neo = data.near_earth_objects;
        console.log(this.neo);
      });
  }

  ngOnInit() {}

  openNEO(id: String) {
    this.router.navigate([`/neo-info/${id}`]);
  }
}
