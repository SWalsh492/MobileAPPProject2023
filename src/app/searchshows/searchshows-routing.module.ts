import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchshowsPage } from './searchshows.page';

const routes: Routes = [
  {
    path: '',
    component: SearchshowsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchshowsPageRoutingModule {}
