import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-neo-info',
  templateUrl: './neo-info.page.html',
  styleUrls: ['./neo-info.page.scss'],
})
export class NeoInfoPage implements OnInit {
  apiKey: String = environment.apiKey;
  id: String = '';
  neo: any = {};
  edk: any = {};
  edmi: any = {};
  edm: any = {};
  edf: any = {};
  cad: any = [];
  orbitClass: any = {};
  orbitalData: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/${this.id}?api_key=${this.apiKey}`
      )
      .subscribe((data: any) => {
        this.neo = data;
        this.cad = data.close_approach_data;
        this.edk = data.estimated_diameter.kilometers;
        this.edm = data.estimated_diameter.meters;
        this.edmi = data.estimated_diameter.miles;
        this.edf = data.estimated_diameter.feet;
        this.orbitalData = data.orbital_data;
        this.orbitClass = data.orbital_data.orbit_class;
        console.log(this.orbitClass);
      });
  }

  ngOnInit() {}
}
