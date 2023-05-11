import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchshowsPageRoutingModule } from './searchshows-routing.module';

import { SearchshowsPage } from './searchshows.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchshowsPageRoutingModule
  ],
  declarations: [SearchshowsPage]
})
export class SearchshowsPageModule {}
