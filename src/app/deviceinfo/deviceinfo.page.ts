import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-deviceinfo',
  templateUrl: './deviceinfo.page.html',
  styleUrls: ['./deviceinfo.page.scss'],
})
export class DeviceinfoPage implements OnInit {

  deviceInfo: any = [];
  constructor() { }

  ngOnInit() {
  }

  // I attempted to implement this plugin, but it proved more work/complicated than it was worth.
  logDeviceInfo = async () => {
    const info = await Device.getInfo();
  
    this.deviceInfo = info;
  };
  
  logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo();
  
    console.log(info);
  };

}
