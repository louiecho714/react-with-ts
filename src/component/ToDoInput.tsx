import React,{ useState,useContext} from "react";
import { AddToDoItem } from "../store/Actions";
import {AppContext} from '../store/Reducer'
import {Button,Input}from 'antd'

const ToDoInput: React.FC =()=>{
    const[inputValue,updateInputValue]= useState('');
    const {dispatch} = useContext(AppContext);

    function handleEditInputValue(e: React.ChangeEvent<HTMLInputElement>){
        updateInputValue(e.target.value);
    }

    function addNewToDoItem(){
        if (inputValue){
            dispatch(AddToDoItem(inputValue));
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
                <Input 
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