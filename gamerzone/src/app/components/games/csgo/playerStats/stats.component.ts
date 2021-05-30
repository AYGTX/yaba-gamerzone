import { ApexService } from './../../../../services/apex.service';
import { Component, OnInit } from '@angular/core';
import { CsgoService } from 'src/app/services/csgo.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  accountdetails: any;
  csgoStats: any;
  apexStats:any;
  constructor(
    private cs: CsgoService,
    private ap: ApexService
  ) {
    
   }

  ngOnInit(): void {
    this.getCsgoStats('ayrtx');
    this.getApexStats('Daltoosh')
  }
  getCsgoStats(_accountname: string | undefined) {
    this.cs.getAccountDetails('ayrtx').subscribe((data: any) => {
      this.accountdetails = data;
      this.csgoStats = this.accountdetails?.data.segments[0].stats;
    }
    );
  }
  getApexStats(_accountname: string | undefined) {
    this.ap.getAccountDetails('Daltoosh').subscribe((data: any) => {
      this.accountdetails = data;
      this.apexStats = this.accountdetails?.data.segments[0].stats;
    }
    );
  }
}
