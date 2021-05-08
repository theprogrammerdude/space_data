import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sat-tle',
  templateUrl: './sat-tle.page.html',
  styleUrls: ['./sat-tle.page.scss'],
})
export class SatTlePage implements OnInit {
  id: string = '';
  satData: any = {};

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http
      .get(`https://tle.ivanstanojevic.me/api/tle/${this.id}`)
      .subscribe((data) => {
        this.satData = data;
        console.log(this.satData);
      });
  }

  ngOnInit() {}
}
