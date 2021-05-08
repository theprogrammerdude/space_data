import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.page.html',
  styleUrls: ['./topic.page.scss'],
})
export class TopicPage implements OnInit {
  apiKey: String = environment.apiKey;
  url: String = '';
  title: String = '';
  data: any = [];
  slice: number = 30;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.url = this.route.snapshot.paramMap.get('topic');
    this.title = this.humanize(this.url);

    this.http
      .get(
        `https://api.nasa.gov/techtransfer/patent/?${this.url}&api_key=${this.apiKey}`
      )
      .subscribe((data: any) => {
        this.data = data.results;
        // console.log(data.results);
      });
  }

  ngOnInit() {}

  humanize(str: String) {
    var i,
      frags = str.split('_');
    for (i = 0; i < frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }
}
