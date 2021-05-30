import { HttpClient } from '@angular/common/http';
import { ApexService } from '../../../services/apex.service';
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
declare var require: any;

@Component({
  selector: 'app-apex',
  templateUrl: './apex.component.html',
  styleUrls: ['./apex.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ApexComponent implements OnInit {
  accountdetails: any;
  stats: any;
  legendInformation: any;
  currentPlayers: any;
  RssData: any;
  constructor(private apex: ApexService, private http: HttpClient,private utils: UtilService) { }

  ngOnInit(): void {
    this.accountDetails('Daltoosh');
     this.getcurrentPlayers();
    this.GetRssFeedData();
    //this.tt();
    this.getgames();
  }
  toggleProBanner(event: any) {
    event.preventDefault();
    document?.querySelector('body')?.classList.toggle('removeProbanner');
  }

  accountDetails(accountName: string | undefined) {
    this.apex.getAccountDetails(accountName).subscribe(data => {
      this.accountdetails = data;
      console.log(this.accountdetails)
    }
    );
  }
  getLegendInformation(accountName: string | undefined) {
    this.apex.getLegendsInformation(accountName).subscribe(data => {
      this.legendInformation = data;
    })
  }

  getcurrentPlayers() {
    this.apex.getCurrentPlayers().subscribe(data => {
      this.currentPlayers = data;
    })
  }
  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://kotaku.com/tag/apex-legends/rss", requestOptions)
      .subscribe(data => {
        require('timers');
        var xml2js = require('xml2js')
        var parser = new xml2js.Parser();
        parser.parseString(data, (err: any, result: any) => {
          this.RssData = result;
        })
      })
  }
  games: any;
  pick:any;
  getgames() {
    this.utils.getgamesBattleRoyale().subscribe(data => {
      this.games = data;
       this.pick = this.games[Math.floor(Math.random() * this.games.length)]
    }
    )
  }
}
