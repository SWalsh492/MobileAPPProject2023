import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'deviceinfo',
    loadChildren: () => import('./deviceinfo/deviceinfo.module').then( m => m.DeviceinfoPageModule)
  },
  {
    path: 'searchshows',
    loadChildren: () => import('./searchshows/searchshows.module').then( m => m.SearchshowsPageModule)
  },
  {
    path: 'mostpopular',
    loadChildren: () => import('./mostpopular/mostpopular.module').then( m => m.MostpopularPageModule)
  },
  {
    path: 'toprated',
    loadChildren: () => import('./toprated/toprated.module').then( m => m.TopratedPageModule)
  },  {
    path: 'example',
    loadChildren: () => import('./example/example.module').then( m => m.ExamplePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
