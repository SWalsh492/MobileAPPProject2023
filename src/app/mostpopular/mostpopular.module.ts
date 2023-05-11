import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostpopularPageRoutingModule } from './mostpopular-routing.module';

import { MostpopularPage } from './mostpopular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostpopularPageRoutingModule
  ],
  declarations: [MostpopularPage]
})
export class MostpopularPageModule {}
