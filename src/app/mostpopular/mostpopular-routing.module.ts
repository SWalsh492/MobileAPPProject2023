import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostpopularPage } from './mostpopular.page';

const routes: Routes = [
  {
    path: '',
    component: MostpopularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostpopularPageRoutingModule {}
