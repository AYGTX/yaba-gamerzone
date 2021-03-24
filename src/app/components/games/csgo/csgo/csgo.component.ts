import { CsgoService } from './../../../../services/games/csgo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csgo',
  templateUrl: './csgo.component.html',
  styleUrls: ['./csgo.component.scss']
})
export class CsgoComponent implements OnInit {
  accountdetails:any;
  weaponInformations:any;
  mapInformations: any;
  mapInformationsFiltered : any;
  playerCount:any;
  //ngModel binding
  name: string = '';

  constructor(
    private cs : CsgoService 
  ) { }

  ngOnInit(): void {
    this.accountDetails('ayrtx');
    this.WeaponDetails('ayrtx');
    this.getNumberOfCurrentPlayers();
    this.mapDetails('ayrtx');
    
  }
  
  toggleProBanner(event:any) {
    
    event.preventDefault();
    document?.querySelector('body')?.classList.toggle('removeProbanner');
  }

  stats:any;
 // accountDetails(accountname: string | undefined){
    accountDetails(accountname: string | undefined){
     this.cs.getAccountDetails('ayrtx').subscribe(data => {
      this.accountdetails = data;
      this.stats = this.accountdetails?.data.segments[0].stats;
      
    }
    );
}

WeaponDetails(accountname: string | undefined){
  this.cs.getWeaponsInformations('ayrtx').subscribe(data => {
   this.weaponInformations = data;
   
 }
 );
}


async mapDetails(accountname: string | undefined){
  await this.cs.getMapsInformations('ayrtx').toPromise().then(data => {
   this.mapInformations = data;
   this.mapInformationsFiltered = this.mapInformations?.data.filter((mapInformations: { stats: { rounds: { value: number; }; }; }) => mapInformations.stats.rounds.value > 100 )
   console.log(this.mapInformationsFiltered)
  })}



getNumberOfCurrentPlayers(){
  this.cs.getNumberOfCurrentPlayers().subscribe(data => {
    this.playerCount = data;
  });
}

}
