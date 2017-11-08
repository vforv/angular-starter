import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/of';

import { AppState } from '../../ngrx/states/app-state';
import { UserAction } from '../../ngrx/actions/actions';
import { StoreData } from '../../ngrx/states/store-data';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    private user: Observable<any>

    constructor(private store: Store<any>) {
        // this.store.subscribe(state => console.log(`Home component state:`, state));
        this.user = this.store.select('appState');
    }

    ngOnInit() {

        this.store.dispatch(new UserAction())
    }
}