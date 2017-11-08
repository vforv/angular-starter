
import { StoreModule, Action } from '@ngrx/store';
import { INIT_APP_STATE, AppState } from '../states/app-state';
import { LOADED_USER_ACTION } from '../actions/actions';

export function reducerStore(state: AppState = INIT_APP_STATE, action: any): AppState {

    switch (action.type) {

        case LOADED_USER_ACTION:
            const userData = action;
            const newState: AppState = Object.assign({}, state)
            
            newState.storeData = {
                user: action.payload.user
            }

            return newState;
        default:
            return state;

    }

}