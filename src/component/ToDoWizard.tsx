import { FunctionComponent,useReducer } from 'react';

import {ToDoReducer,initialState,ToDoContext} from '../store/ToDoReducer';
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

const ToDoWizard: FunctionComponent =()=>{
    const [state,dispatch] = useReducer(ToDoReducer,initialState);


    return(
        <ToDoContext.Provider value={{state,dispatch}}>
            <div className="container">
                <h1>
                    Todo list with React hooks for
                </h1>
                <ToDoInput/>
                <ToDoList/>

            </div>
        </ToDoContext.Provider>
    );
}

export default ToDoWizard;