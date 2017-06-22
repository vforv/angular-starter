import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>
  <router-outlet></router-outlet>`
})

export class AppComponent { 

}
