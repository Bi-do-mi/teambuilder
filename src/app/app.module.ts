import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {AgmCoreModule} from '@agm/core';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {MapBoxComponent} from './components/map-box/map-box.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MapBoxComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTh3PjY7IxZ3A1cvipgVCCxK-Gmysf4Nk'
    }),
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
