import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';


import { USER_ACTION, LoadedUserAction } from '../actions/actions';
import { UserService } from '../../shared/services/user.service';


@Injectable()
export class LoadUserEffects {


    constructor(private actions$: Actions, private userService: UserService) {
    }


    @Effect() userAcc$: Observable<Action> = this.actions$
        .ofType(USER_ACTION)
        .switchMap(() => this.userService.getUser())
        .map(useData => new LoadedUserAction(useData))

}