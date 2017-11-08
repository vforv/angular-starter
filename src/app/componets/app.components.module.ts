import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot()
  ],
  declarations: [
    AboutComponent,
    HomeComponent
  ]
})

export class ComponentsModule { }
