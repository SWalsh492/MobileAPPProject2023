import { Component, OnInit } from '@angular/core';
import { ShowapiService } from '../showapi.service';

@Component({
  selector: 'app-mostpopular',
  templateUrl: './mostpopular.page.html',
  styleUrls: ['./mostpopular.page.scss'],
})
export class MostpopularPage {
  showData: any = []; // API Data var

  constructor(private serv: ShowapiService) { }

  // API Data grab methods for 10 most popular shows
  GetSuccession(){
    this.serv.GetSearchData("Succession").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetLastOfUs(){
    this.serv.GetSearchData("The Last Of Us").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetTedLasso(){
    this.serv.GetSearchData("Ted Lasso").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetMandalorian(){
    this.serv.GetSearchData("The Mandalorian").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetGameOfThrones(){
    this.serv.GetSearchData("Game Of Thrones").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetYellowstone(){
    this.serv.GetSearchData("Yellowstone").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetBreakingBad(){
    this.serv.GetSearchData("Breaking Bad").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetPicard(){
    this.serv.GetSearchData("Star Trek: Picard").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetStrangerThings(){
    this.serv.GetSearchData("Stranger Things").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetTrueDetective(){
    this.serv.GetSearchData("True Detective").subscribe
    (data => {
      this.showData = data;
    });
  }

}
