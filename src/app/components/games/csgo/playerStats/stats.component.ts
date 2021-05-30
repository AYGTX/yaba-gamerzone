import { Component, OnInit } from '@angular/core';
import { CsgoService } from 'src/app/services/csgo.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  accountdetails: any;
  stats: any;

  constructor(
    private cs: CsgoService,
  ) {
    
   }

  ngOnInit(): void {
    this.accountDetails('ayrtx');
  }
  accountDetails(_accountname: string | undefined) {
    this.cs.getAccountDetails('ayrtx').subscribe((data: any) => {
      this.accountdetails = data;
      this.stats = this.accountdetails?.data.segments[0].stats;
    }
    );
  }
}
