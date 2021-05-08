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
  line1: any = [];
  line2: any = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http
      .get(`https://tle.ivanstanojevic.me/api/tle/${this.id}`)
      .subscribe((data: any) => {
        this.satData = data;
        console.log(this.satData);

        var temp1: String = this.satData.line1.split('');
        var temp2: String = this.satData.line2.split('');

        this.line1.push(temp1);
        this.line2.push(temp2);
        console.log(this.line2);
      });
  }

  ngOnInit() {}
}
