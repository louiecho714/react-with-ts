
import React,{ FunctionComponent ,useContext} from "react";
import { ToDoItemModel } from "../model/ToDoItemModel";
import { ToDoContext } from "../store/ToDoReducer";
import ToDoItem from './ToDoItem';

const ToDoList:FunctionComponent =()=>{
    const {state} = useContext(ToDoContext);
    return (
        <div>
            <ul>
                {state.ToDoItems.map((toDoItem:ToDoItemModel,index:number)=>(
                    <ToDoItem
                        key={index}
                        id={toDoItem.id}
                        task={toDoItem.task}
                        isDone={toDoItem.isDone}
                    
                    />
                ))}
            </ul>
        </div>
    )
}


export default ToDoList;