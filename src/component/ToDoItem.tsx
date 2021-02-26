import { FunctionComponent,useContext } from "react";
import { ToDoItemModel } from "../model/ToDoItemModel";
import { ToDoContext } from "../store/ToDoReducer";
import { ToggleToDoItem} from'../store/Actions';

const ToDoItem:FunctionComponent<ToDoItemModel> =(toDoItem:ToDoItemModel)=>{

    const {dispatch} = useContext(ToDoContext);
    function DispatchToggleToDoItem(){
        dispatch(ToggleToDoItem(toDoItem.id))
    }

    return (
        <li>
            <div>
                <span onClick={DispatchToggleToDoItem}>
                    {toDoItem.task}
                </span>
            </div>
        </li>
    )

}


export default ToDoItem;