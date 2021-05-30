import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApexService {

  constructor(private http: HttpClient) {
  }

  getCurrentPlayers(){
    const body ={text : "https://steamcharts.com/app/1172470"}
    const url ='http://localhost:5001/gamerzoneyaba/us-central1/scraper';
    var headers = new HttpHeaders();
    headers =  headers.set('Accept', 'application/json');
    return this.http.post(url,body);
  }

  getAccountDetails(platformUserIdentifier: string | undefined){
    var headers = new HttpHeaders();
    headers =  headers.set('TRN-Api-Key', environment.trnapikey);
    headers =  headers.set('Accept', 'application/json');
    const url = 'https://public-api.tracker.gg/v2/apex/standard/profile/psn/'+platformUserIdentifier
   return this.http.get(url, {headers: headers});
   }
  
// playlists, seasons, heroes, etc, here i have chosen Legends
   getLegendsInformation(platformUserIdentifier: string | undefined){
    var headers = new HttpHeaders();
        headers =  headers.set('TRN-Api-Key', environment.trnapikey);
        headers =  headers.set('Accept', 'application/json');
        const url = 'https://public-api.tracker.gg/v2/apex/standard/profile/battlenet/'+platformUserIdentifier+'/segments/legend'
       return this.http.get(url, {headers: headers});
       }
//The platform slug, one of: 'origin', 'xbl', 'psn'.
//Search for an Apex Legends player 
//GET https://public-api.tracker.gg/v2/apex/standard/search?platform=psn&query=Daltoosh


}
