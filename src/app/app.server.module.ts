import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './routes';
import { HomeComponent } from './home/home.component';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
    }),
    ServerModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  declarations: [
    AppComponent, AboutComponent, HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppServerModule { }
