
import React from 'react';
import { Action } from './Action';
import {
    AddToDoItemAction,
    ToggleToDoItemAction,
    DELETE_ALL_BOOKS, ADD_TO_DO_ITEM, TOGGLE_TO_DO_ITEM,
    DELETE_TO_DO_ITEM, AddAllBooksAction, ADD_ALL_BOOKS,
    StartLoadingAction, StopLoadingAction, STOP_LOADING,
    START_LOADING, DeleteAllBooksAction,
    ADD_CURRENT_USER, REMOVE_CURRENT_USER
} from './Actions';
import { ToDoItemModel } from '../model/ToDoItemModel'
import { AppState } from '../model/AppState'
import { AppContextModel } from '../model/AppContextModel'


export const initialState: AppState = {
    ToDoItems: [],
    Loading: false,
    Books: [],
    CurrentUser: null,
};

export const AppContext = React.createContext<AppContextModel>(
    {
        state: initialState,
        dispatch: () => null,
    }
);


//Add task reducer
export const AddTodoItemReducer = (state: AppState, action: AddToDoItemAction) => {
    return {
        ...state,
        ToDoItems: [...state.ToDoItems, action.payload.newToDoItem]
    }
}

//Toggle task reducer
export const ToggleToDoItemReducer = (state: AppState, action: ToggleToDoItemAction) => {
    return {
        ...state,
        ToDoItems: state.ToDoItems.map(
            (toDoItem: ToDoItemModel) => (
                (toDoItem.id === action.payload.removeToDoItem)
                    ? { ...toDoItem, isDone: !toDoItem.isDone }
                    : toDoItem
            )
        )
    }
}

//Delete task reducer
export const DeleteToDoItemReducer = (state: AppState, action: ToggleToDoItemAction) => {
    return {
        ...state,
        ToDoItems: state.ToDoItems.filter(
            (el) => el.id !== action.payload.removeToDoItem
        )
    }
}

//to get books
export const AddAllBooksReducer = (state: AppState, action: AddAllBooksAction) => {
    return {
        ...state,
        Books: action.payload.books
    }
}

//to reset books
export const DeleteAllBooksReducer = (state: AppState, action: DeleteAllBooksAction) => {
    return {
        ...state,
        Books: []
    }
}



//set loading status
export const LoadingReducer = (state: AppState, action: StartLoadingAction | StopLoadingAction) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                Loading: true,
            }

        case STOP_LOADING:
            return {
                ...state,
                Loading: false,
            }

        default:
            return state;
    }
}

export function UserReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case ADD_CURRENT_USER:
            return {
                ...state,
                CurrentUser: action.payload.user,
            }

        case REMOVE_CURRENT_USER:
            return {
                ...state,
                CurrentUser: null,
            }

        default:
            return state;

    }

}


export function BooksReducer(state: AppState, action: Action): AppState {
    switch (action.type){
        case ADD_ALL_BOOKS:
            return AddAllBooksReducer(state, action);

        case DELETE_ALL_BOOKS:
            return DeleteAllBooksReducer(state, action);

        default:
            return state;    
    }
}

export function ToDoReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case ADD_TO_DO_ITEM:
            return AddTodoItemReducer(state, action);

        case TOGGLE_TO_DO_ITEM:
            return ToggleToDoItemReducer(state, action);

        case DELETE_TO_DO_ITEM:
            return DeleteToDoItemReducer(state, action);

        default:
            return state;
    }
}

export const MainReducer = (state:AppState,action:Action):AppState =>({
        ToDoItems:ToDoReducer(state,action).ToDoItems,
        Books:BooksReducer(state,action).Books,
        Loading:LoadingReducer(state,action).Loading,
        CurrentUser:UserReducer(state,action).CurrentUser,
    })

//root AddTodoItemReducer
// export function ToDoReducer(state:AppState,action:Action):AppState{
//     switch(action.type){
//         case ADD_TO_DO_ITEM: 
//             return AddTodoItemReducer(state,action);

//         case TOGGLE_TO_DO_ITEM: 
//             return ToggleToDoItemReducer(state,action);

//         case DELETE_TO_DO_ITEM: 
//             return DeleteToDoItemReducer(state,action);

//         case ADD_ALL_BOOKS:
//             return AddAllBooksReducer(state,action);

//         case DELETE_ALL_BOOKS:
//             return DeleteAllBooksReducer(state,action);        

//         case START_LOADING:
//             return LoadingReducer(state,action);     

//         case STOP_LOADING:
//             return LoadingReducer(state,action);

//         case ADD_CURRENT_USER:
//             return {
//                 ...state,
//                 CurrentUser: action.payload.user,
//             }

//         case REMOVE_CURRENT_USER:
//             return {
//                 ...state,
//                 CurrentUser: null,
//             }    

//         default:
//             return state;    
//     }
// }