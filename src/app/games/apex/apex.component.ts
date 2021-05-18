import { ApexService } from './../apex.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-apex',
  templateUrl: './apex.component.html',
  styleUrls: ['./apex.component.scss']
})
export class ApexComponent implements OnInit {
  accountdetails:any;
  stats:any;
  legendInformation:any;
  
  constructor(private apex: ApexService  ) { }

  ngOnInit(): void {
    this.accountDetails('Daltoosh');
    //this.getLegendInformation('Daltoosh');
  }

  accountDetails(accountName: string | undefined){
    this.apex.getAccountDetails(accountName).subscribe(data => {
     this.accountdetails = data;
     console.log(this.accountdetails)
   }
   );
}
getLegendInformation(accountName: string | undefined){
  this.apex.getLegendsInformation(accountName).subscribe(data=>{
    this.legendInformation=data;
    console.log(this.legendInformation)
  })
  }
}

