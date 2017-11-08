import { Action } from '@ngrx/store';

export const LOADED_USER_ACTION = 'LOADED_USER_ACTION';

export const USER_ACTION = 'USER_ACTION';

export class UserAction implements Action {
    readonly type = USER_ACTION;
}

export class LoadedUserAction implements Action {
    readonly type = LOADED_USER_ACTION;
    
    constructor(public payload: any) {
        
    }
}