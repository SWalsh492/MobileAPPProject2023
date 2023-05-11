import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowapiService {
exampleDisplay:String = "Star Wars";
  constructor(private http:HttpClient) { }

  // Displays example data from api based off exampleDisplay, used in searchshows and example pages
  GetShowData():Observable<any>{
    return this.http.get('https://api.tvmaze.com/search/shows?q=' + this.exampleDisplay);
  }

  // Displays specific data based on inputVar, used in tandem with an input box for searching shows in searchshows.page
  GetSearchData(inputVar:String):Observable<any>{
    return this.http.get('https://api.tvmaze.com/search/shows?q=' + inputVar);
  }
  // Read in cast members of a chosen show, isn't implemented due to unknown errors
  getPeopleData(inputVar:Number):Observable<any>{
    return this.http.get('https://api.tvmaze.com/show/' + inputVar + '/cast');
  }

}
