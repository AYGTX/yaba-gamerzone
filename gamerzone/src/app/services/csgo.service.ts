import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
//import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class CsgoService {
  data: any;


  constructor(private http: HttpClient) {
   }
   getCurrentPlayers(){
    const body ={text : "https://steamcharts.com/app/730"}
    const url ='http://localhost:5001/gamerzoneyaba/us-central1/scraper';
    var headers = new HttpHeaders();
    headers =  headers.set('Accept', 'application/json');
    return this.http.post(url,body);
  }
   getAccountDetails(platformUserIdentifier: string | undefined){
    var headers = new HttpHeaders();
    headers =  headers.set('TRN-Api-Key', environment.trnapikey);
    headers =  headers.set('Accept', 'application/json');
    const url = 'https://public-api.tracker.gg/v2/csgo/standard/profile/steam/'+platformUserIdentifier
   return this.http.get(url, {headers: headers});
   }

   getWeaponsInformations(platformUserIdentifier: string | undefined){
    var headers = new HttpHeaders();
        headers =  headers.set('TRN-Api-Key', environment.trnapikey);
        headers =  headers.set('Accept', 'application/json');
        const url = 'https://public-api.tracker.gg/v2/csgo/standard/profile/steam/ayrtx/segments/weapon'
       return this.http.get(url, {headers: headers});
       }

       
   getMapsInformations(_platformUserIdentifier: string | undefined){
    var headers = new HttpHeaders();
        headers =  headers.set('TRN-Api-Key', environment.trnapikey);
        headers =  headers.set('Accept', 'application/json');
        const url = 'https://public-api.tracker.gg/v2/csgo/standard/profile/steam/ayrtx/segments/map'
       return this.http.get(url, {headers: headers});
       }
       
  getNumberOfCurrentPlayers(){
    var headers = new HttpHeaders();
    headers =  headers.set('Accept', 'application/json');
    const url = 'https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=730'
    return this.http.get(url ,{headers: headers});
  }
}