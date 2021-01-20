import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MapBoxComponent} from './components/map-box/map-box.component';

const appRoutes: Routes = [
  {path: '404', component: PageNotFoundComponent, data: {
      title: 'Error 404',
      robots: 'noindex'
    }},
  {
    path: '', component: MapBoxComponent,
    data: {
      title: 'Teambuilder',
      description: 'Gather your football team, or find a tennis partner. Play whenever, wherever and with whomever you want. Free service.',
      keywords: 'find a tennis partner, team, find a game'
    }
  },
  {path: '**', redirectTo: '404', pathMatch: 'full', data: {title: 'Ошибка 404'}}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
