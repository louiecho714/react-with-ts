import { FunctionComponent,useReducer } from 'react';

import {ToDoReducer,initialState,ToDoContext} from '../store/ToDoReducer';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import Books from './Books';
import {Button} from 'antd';
import {getBooks} from '../service/RestApi'

const ToDoWizard: FunctionComponent =()=>{
    const [state,dispatch] = useReducer(ToDoReducer,initialState);

    function getAllBooks(){
        getBooks(dispatch)
    }

    return(
        <ToDoContext.Provider value={{state,dispatch}}>
            <div className="container">
                <h1>
                    Todo list with React hooks for
                </h1>
                <ToDoInput/>
                <ToDoList/>

            </div>
            <Button onClick={getAllBooks} >Get all books</Button>
            <Books/>
            
        </ToDoContext.Provider>
    );
}

export default ToDoWizard;