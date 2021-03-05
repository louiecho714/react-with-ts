import { FunctionComponent } from 'react';


import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';


const ToDoWizard: FunctionComponent =()=>{
    
    return(       
        <div className="container">
            <h1>
                Todo list with React hooks for
            </h1>
            <ToDoInput/>
            <ToDoList/>        
        </div>                          
    );
}

export default ToDoWizard;