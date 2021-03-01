import { Action } from "./Action";
import {ToDoItemModel} from '../model/ToDoItemModel'

export const ADD_TO_DO_ITEM = 'ADD_TO_DO_ITEM';
export const TOGGLE_TO_DO_ITEM = 'TOGGLE_TO_DO_ITEM';
export const DELETE_TO_DO_ITEM = 'DELETE_TO_DO_ITEM';

let nextToDoId: number = 0;


export interface AddToDoItemAction extends Action {
    payload:{
        newToDoItem:ToDoItemModel;
    }
}

export interface ToggleToDoItemAction extends Action {
    payload:{
        removeToDoItem:number;
    }
}

export const AddToDoItem = (newTdoItem:string):AddToDoItemAction=>(
    {
        type: ADD_TO_DO_ITEM,
        payload:{
            newToDoItem:{
                id:nextToDoId++,
                task: newTdoItem,
                isDone: false,
            }
        }
    }
)

export const ToggleToDoItem = (idTdoItem:number):ToggleToDoItemAction=>(
    {
        type: TOGGLE_TO_DO_ITEM,
        payload:{
            removeToDoItem:idTdoItem
        }
    }
)

export const DeleteToDoItem = (idTdoItem:number):ToggleToDoItemAction=>(
    {
        type: DELETE_TO_DO_ITEM,
        payload:{
            removeToDoItem:idTdoItem
        }
    }
)