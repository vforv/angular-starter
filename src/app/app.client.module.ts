import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
  bootstrap: [AppComponent]
})
export class AppClientModule { }
