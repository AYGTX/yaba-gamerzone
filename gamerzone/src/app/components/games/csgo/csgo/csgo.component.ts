import { CsgoService } from './../../../../services/csgo.service';
import { UtilService } from './../../../../services/util.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-csgo',
  templateUrl: './csgo.component.html',
  styleUrls: ['./csgo.component.scss']
})
export class CsgoComponent implements OnInit {
  accountdetails: any;
  weaponInformations: any;
  mapInformations: any;
  mapInformationsFiltered: any;
  playerCount: any;
  currentPlayers: any;
  //ngModel binding
  name: string = '';

  constructor(
    private cs: CsgoService,
    private utils: UtilService
  ) { }

  ngOnInit(): void {
    this.WeaponDetails('ayrtx');
    this.getNumberOfCurrentPlayers();
    this.mapDetails('ayrtx');
    this.getcurrentPlayers();
    this.getgames();
  }
  toggleProBanner(event: any) {
    event.preventDefault();
    document?.querySelector('body')?.classList.toggle('removeProbanner');
  }

  WeaponDetails(accountname: string | undefined) {
    this.cs.getWeaponsInformations('ayrtx').subscribe((data: any) => {
      this.weaponInformations = data;

    }
    );
  }
  async mapDetails(accountname: string | undefined) {
    await this.cs.getMapsInformations('ayrtx').toPromise().then((data: any) => {
      this.mapInformations = data;
      this.mapInformationsFiltered = this.mapInformations?.data.filter((mapInformations: { stats: { rounds: { value: number; }; }; }) => mapInformations.stats.rounds.value > 100)
      console.log(this.mapInformationsFiltered)
    })
  }
  getNumberOfCurrentPlayers() {
    this.cs.getNumberOfCurrentPlayers().subscribe((data: any) => {
      this.playerCount = data;
    });
  }
  getcurrentPlayers() {
    this.cs.getCurrentPlayers().subscribe((data: any) => {
      this.currentPlayers = data;
      console.log(this.currentPlayers)
    })
  }
  games: any;
  pick:any;
  getgames() {
    this.utils.getgames().subscribe(data => {
      this.games = data;
      console.log(this.games.length);
       this.pick = this.games[Math.floor(Math.random() * this.games.length)]
      console.log(this.pick);
    }
    )
  }
}

