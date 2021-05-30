import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) {
  }


 options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=shooter.battle-royale&platform=pc',
  headers: {
    'x-rapidapi-key': 'b4ffabe329msh6a4570ddd8934eap1fd831jsne57777e93e67',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
  }
};
  getgames(){
    var headers = new HttpHeaders();
    headers =  headers.set('x-rapidapi-key', 'b4ffabe329msh6a4570ddd8934eap1fd831jsne57777e93e67');
    headers =  headers.set('x-rapidapi-host', 'free-to-play-games-database.p.rapidapi.com');
    headers =  headers.set('Accept', 'application/json');
    return this.http.get(this.options.url, {headers: headers});
  }
  getgamesBattleRoyale(){
    var headers = new HttpHeaders();
    headers =  headers.set('x-rapidapi-key', 'b4ffabe329msh6a4570ddd8934eap1fd831jsne57777e93e67');
    headers =  headers.set('x-rapidapi-host', 'free-to-play-games-database.p.rapidapi.com');
    headers =  headers.set('Accept', 'application/json');
    return this.http.get("https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=battle-royale&platform=pc", {headers: headers});
  }
}