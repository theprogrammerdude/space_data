import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.page.html',
  styleUrls: ['./topic.page.scss'],
})
export class TopicPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  apiKey: String = environment.apiKey;
  url: String = '';
  title: String = '';
  data: any = [];
  limit: number = 30;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.url = this.route.snapshot.paramMap.get('topic');
    this.title = this.humanize(this.url);

    this.getData(this.limit);
    console.log(this.data);
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

  refresh(e: any) {
    console.log('Begin async operation');
    e.target.complete();

    this.limit += 30;
    console.log(this.limit);

    this.getData(this.limit);
    console.log(this.data);
  }

  getData(limit: number) {
    this.http
      .get(
        `https://api.nasa.gov/techtransfer/patent/?${this.url}&api_key=${this.apiKey}`
      )
      .subscribe((data: any) => {
        this.data = data.results.slice(0, limit);

        console.log(this.data);
      });
  }

  toggleScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
