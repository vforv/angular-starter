import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { NgrxModule } from './ngrx/app.ngrx.module';
import { SharedModule } from './shared/app.shared.module';
import { ComponentsModule } from './componets/app.components.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
    }),
    ServerModule,
    AppRoutingModule,
    HttpModule,
    NgrxModule,
    SharedModule,
    ComponentsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppServerModule { }
