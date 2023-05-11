import { Component, OnInit } from '@angular/core';
import { ShowapiService } from '../showapi.service';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-searchshows',
  templateUrl: './searchshows.page.html',
  styleUrls: ['./searchshows.page.scss'],
})
export class SearchshowsPage implements OnInit {
showData: any = []; // API Data var
inputVar: String = ""; // Search String var
storedSearch: String = ""; // Search storage var

  constructor(private serv: ShowapiService, private storage:Storage, private navCtrl: NavController) { }

  ngOnInit(): void { // Pulls data for displaying example
    this.serv.GetShowData().subscribe
    (data => {
        this.showData = data;
      });
  }

  EnterSearch(inputVar:String){ // Pulls data from search method, passing inputVar
    this.serv.GetSearchData(inputVar).subscribe
    (data => {
        this.showData = data;
      });
  }

  ShowCast(inputVar:Number){ // pulls cast data from shows based on inputVar
    this.serv.getPeopleData(inputVar).subscribe
    (data => {
        this.showData = data;
      });
  }

  //Storage method
  async ionViewWillEnter() {
    await this.storage.create();
    this.storedSearch = await this.storage.get('stored');
  }

  // Save button for storing the last show searched for
  async saveSearch() {
    await this.storage.create();
    await this.storage.set("stored", this.inputVar);
  }
  
}
