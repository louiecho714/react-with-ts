import {ToDoState} from './ToDoState'

export interface ToDoContextModel {
    state:ToDoState;
    dispatch:any;
}