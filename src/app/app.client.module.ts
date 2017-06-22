import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './routes';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
    }),
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  declarations: [
    AppComponent, AboutComponent, HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppClientModule { }
