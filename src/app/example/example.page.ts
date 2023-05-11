import { Component, OnInit } from '@angular/core';
import { ShowapiService } from '../showapi.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.page.html',
  styleUrls: ['./example.page.scss'],
})
export class ExamplePage implements OnInit {
  showData: any = []; // API Data var

  constructor(private serv: ShowapiService) { }

  ngOnInit() { // Grabs data from api method call using the exampleDisplay var in showapi.service
    this.serv.GetShowData().subscribe
    (data => {
        this.showData = data;
      });
  }

}
