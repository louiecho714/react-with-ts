 
import React from 'react';
import { Action } from './Action';
import { AddToDoItemAction,ToggleToDoItemAction, ADD_TO_DO_ITEM, TOGGLE_TO_DO_ITEM } from './Actions';
import {ToDoItemModel} from '../model/ToDoItemModel'
import {ToDoState} from '../model/ToDoState'
import {ToDoContextModel} from '../model/ToDoContextModel'


export const initialState:ToDoState={
    ToDoItems:[]
};

export const ToDoContext:React.Context<ToDoContextModel> = React.createContext(
    {
        state:initialState,
        dispatch: null,
    }
);


//Add task reducer
export const AddTodoItemReducer = (state:ToDoState,action:AddToDoItemAction) =>{
    return {
        ...state,
        ToDoItems:[...state.ToDoItems,action.payload.newToDoItem]
    }
}

//Toggle task reducer
export const ToggleToDoItemReducer = (state:ToDoState,action:ToggleToDoItemAction) =>{
    return {
        ...state,
        ToDoItems: state.ToDoItems.map( 
            (toDoItem:ToDoItemModel)=>(
                (toDoItem.id===action.payload.removeToDoItem)
                    ? {...toDoItem, isDone:!toDoItem.isDone}
                    : toDoItem
            )
        )    
    }
}

//root AddTodoItemReducer
export function ToDoReducer(state:ToDoState,action:Action):ToDoState{
    switch(action.type){
        case ADD_TO_DO_ITEM: 
            return AddTodoItemReducer(state,action);
        
        case TOGGLE_TO_DO_ITEM: 
            console.log("TOGGLE_TO_DO_ITEM")
            return ToggleToDoItemReducer(state,action);
        
        default:
            return state;    
    }
}