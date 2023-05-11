import { Component, OnInit } from '@angular/core';
import { ShowapiService } from '../showapi.service';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.page.html',
  styleUrls: ['./toprated.page.scss'],
})
export class TopratedPage {
  showData: any = []; // API Data var

  constructor(private serv: ShowapiService) { }

    // API Data grab methods for top 10 rated shows
  GetBreakingBad(){
    this.serv.GetSearchData("Breaking Bad").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetTheWire(){
    this.serv.GetSearchData("The Wire").subscribe
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
  GetTheSopranos(){
    this.serv.GetSearchData("The Sopranos").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetAttackOnTitan(){
    this.serv.GetSearchData("Attack On Titan").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetTheOffice(){
    this.serv.GetSearchData("The Office").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetBetterCallSaul(){
    this.serv.GetSearchData("Better Call Saul").subscribe
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
  GetFriends(){
    this.serv.GetSearchData("Friends").subscribe
    (data => {
      this.showData = data;
    });
  }
  GetFargo(){
    this.serv.GetSearchData("Fargo").subscribe
    (data => {
      this.showData = data;
    });
  }

}
