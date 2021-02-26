import { FunctionComponent,useReducer } from 'react';

import {ToDoReducer,initialState,ToDoContext} from '../store/ToDoReducer';
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

const ToDoWizard: FunctionComponent =()=>{
    const [state,dispatch] = useReducer(ToDoReducer,initialState);


    return(
        <ToDoContext.Provider value={{state,dispatch}}>
            <div className="container">
                <p className="todo-logo">
                    Todo list with React hooks for
                </p>
                <ToDoInput/>
                <ToDoList/>

            </div>
        </ToDoContext.Provider>
    );
}

export default ToDoWizard;