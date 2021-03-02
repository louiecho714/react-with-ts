import { FunctionComponent,useReducer } from 'react';

import {ToDoReducer,initialState,ToDoContext} from '../store/ToDoReducer';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import Books from './Books';
import {Button,Divider} from 'antd';
import {getBooks} from '../service/RestApi'
import { DeleteAllBooks } from '../store/Actions';

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
                <Divider orientation="left" plain>Books</Divider>
                <Button onClick={getAllBooks} >Get all books</Button>
                <Button onClick={()=>dispatch(DeleteAllBooks())} >Delete all books</Button>
                <Books/>

            </div>       
            
        </ToDoContext.Provider>
    );
}

export default ToDoWizard;