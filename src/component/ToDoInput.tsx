import React,{ useState} from "react";
import {Button}from 'antd'
import {
    addTodo,
} from '../store/todoSlice'
import { useAppDispatch } from '../store/hooks'
const ToDoInput =()=>{
    const dispatch = useAppDispatch();
    const[inputValue,updateInputValue]= useState('');

    function handleEditInputValue(e: React.ChangeEvent<HTMLInputElement>){
        updateInputValue(e.target.value);
    }

    function addNewToDoItem(){
        if (inputValue){
            dispatch(addTodo(inputValue))
            updateInputValue("")
        }
    }

    function handleEnterButton(e:React.KeyboardEvent){
        if (e.code === 'Enter'){
            e.preventDefault();
            addNewToDoItem();
        }     
        
    }

    return (
        <div>
            <div>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleEditInputValue}
                    onKeyDown={handleEnterButton}
                />
                <Button onClick={addNewToDoItem}> add </Button>
            </div>
            <span
                style={{color:'red'}}
                hidden={inputValue!==""}
            >
                you should enter any text to save new item!
            </span>
        </div>
    )
}

export default ToDoInput;