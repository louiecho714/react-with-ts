
import { ToDoItemModel } from "../model/ToDoItemModel";

import ToDoItem from './ToDoItem';
import { selectTodos } from '../store/todoSlice'
import { useAppSelector } from '../store/hooks'
const ToDoList =()=>{
    const todos = useAppSelector(selectTodos);

    return (
        <div>
            <ul>
                {todos.map((toDoItem:ToDoItemModel,index:number)=>(
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