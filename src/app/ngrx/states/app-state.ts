import { UiState, INIT_UI_STATE } from './ui-state';
import { StoreData, INIT_STORE_DATA } from './store-data';

export interface AppState {
    uiState: UiState
    storeData: StoreData
}


export const INIT_APP_STATE:AppState = {
    uiState: INIT_UI_STATE,
    storeData: INIT_STORE_DATA
}