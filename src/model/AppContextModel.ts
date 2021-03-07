import {AppState} from './AppState'

export interface AppContextModel {
    state:AppState;
    dispatch:React.Dispatch<any>;
}

