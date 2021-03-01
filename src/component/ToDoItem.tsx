import { FunctionComponent,useContext } from "react";
import { ToDoItemModel } from "../model/ToDoItemModel";
import { ToDoContext } from "../store/ToDoReducer";
import { ToggleToDoItem} from'../store/Actions';

const ToDoItem:FunctionComponent<ToDoItemModel> =(toDoItem:ToDoItemModel)=>{

    const {dispatch} = useContext(ToDoContext);
    
    function DispatchToggleToDoItem(){
        console.log("Dispatch ToggleToDoItem !")
        dispatch(ToggleToDoItem(toDoItem.id))
    }

    const style = {
        color: toDoItem.isDone ? 'red' : 'blue',
        textDecorationLine: toDoItem.isDone ?  'line-through' : 'none'
    }


    return (
        <li>
            <div>
                <span onClick={DispatchToggleToDoItem} style={style}>
                    {toDoItem.task}
                </span>
            </div>
        </li>
    )

}


export default ToDoItem;