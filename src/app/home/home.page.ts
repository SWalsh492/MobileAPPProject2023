import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private storage:Storage) {}

  async openBrowser() { // Browser plugin
    await Browser.open({url: 'https://www.tvmaze.com/api'}); // links to API source site
  }

}
