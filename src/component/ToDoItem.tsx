import { FunctionComponent,useContext } from "react";
import { ToDoItemModel } from "../model/ToDoItemModel";
import { AppContext } from "../store/Reducer";
import { ToggleToDoItem,DeleteToDoItem} from'../store/Actions';
import { Button} from'antd';

const ToDoItem:FunctionComponent<ToDoItemModel> =(toDoItem:ToDoItemModel)=>{

    const {dispatch} = useContext(AppContext);
    
    function DispatchToggleToDoItem(){
        dispatch(ToggleToDoItem(toDoItem.id))
    }

    const DispatchDeleteToDoItem = () => {
        dispatch(DeleteToDoItem(toDoItem.id))
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
                <Button onClick={DispatchDeleteToDoItem}>delete</Button>
            </div>
        </li>
    )

}


export default ToDoItem;