import { ToDoItemModel } from "../model/ToDoItemModel";
import { Button} from'antd';
import {
    toggleTodo,
    deleteTodo,
} from '../store/todoSlice'
import { useAppDispatch } from '../store/hooks'

const ToDoItem=(toDoItem:ToDoItemModel)=>{
    const dispatch = useAppDispatch();

    function dispatchToggleToDoItem(){
        dispatch(toggleTodo(toDoItem.id))
    }

    const dispatchDeleteToDoItem = () => {
        dispatch(deleteTodo(toDoItem.id))
    }

    const style = {
        color: toDoItem.isDone ? 'red' : 'blue',
        textDecorationLine: toDoItem.isDone ?  'line-through' : 'none'
    }


    return (
        <li>
            <div>
                <span onClick={dispatchToggleToDoItem} style={style}>
                    {toDoItem.task} 
                </span>
                <Button onClick={dispatchDeleteToDoItem}>delete</Button>
            </div>
        </li>
    )

}


export default ToDoItem;