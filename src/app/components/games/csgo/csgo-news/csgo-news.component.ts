import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
declare var require: any;
@Component({
  selector: 'app-csgo-news',
  templateUrl: './csgo-news.component.html',
  styleUrls: ['./csgo-news.component.scss']
})


export class CsgoNewsComponent implements OnInit {
  RssData : any;
  constructor(private http: HttpClient) { }
  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://www.hltv.org/rss/news", requestOptions)
      .subscribe(data => {
        require('timers');
        let parseString = require('xml2js').parseString;
        parseString(data, (err:any, result: any) => {
          this.RssData = result;
        });
      });
  }
  ngOnInit(): void {
    this.GetRssFeedData();
  }


}
export interface IRssData {}
