import { Action } from "./Action";
import {ToDoItemModel} from '../model/ToDoItemModel'
import { BookModel } from "../model/BookModel";

export const ADD_TO_DO_ITEM = 'ADD_TO_DO_ITEM';
export const TOGGLE_TO_DO_ITEM = 'TOGGLE_TO_DO_ITEM';
export const DELETE_TO_DO_ITEM = 'DELETE_TO_DO_ITEM';
export const ADD_ALL_BOOKS = 'ADD_ALL_BOOKS';
export const DELETE_ALL_BOOKS = 'DELETE_ALL_BOOKS';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

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

export interface AddAllBooksAction extends Action {
    payload:{
        books:BookModel[];
    }
}

export interface StartLoadingAction extends Action {
    payload:{
        loading:boolean;
    }
}

export interface StopLoadingAction extends Action {
    payload:{
        loading:boolean;
    }
}

export interface DeleteAllBooksAction extends Action {
    payload:{
        books:BookModel[];
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


export const AddAllBooks = (books:Array<BookModel>):AddAllBooksAction=>(
    {
        type: ADD_ALL_BOOKS,
        payload:{
            books
        }
    }
)

export const DeleteAllBooks = ():DeleteAllBooksAction=>(
    {
        type: ADD_ALL_BOOKS,
        payload:{
            books:[]
        }
    }
)

export const StartLoading = ():StartLoadingAction=>(
    {
        type:START_LOADING,
        payload:{
            loading:true
        }
    }
)

export const StopLoading = ():StopLoadingAction=>(
    {
        type:STOP_LOADING,
        payload:{
            loading:false
        }
    }
)