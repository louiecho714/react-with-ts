import {getBooks} from '../service/RestApi'
import Books from './Books';
import {Button,Divider,Input} from 'antd';
import { DeleteAllBooks } from '../store/Actions';
import {useContext,useState} from 'react';
import { AppContext } from "../store/ToDoReducer";

const LoginPage = () => {

    const {dispatch} = useContext(AppContext);
    const [account,setAccount]= useState("");
    const [password,setPassword]= useState("");
    
    const login = ()=>{

    }

    const hadleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setAccount(e.target.value)
    }

    const hadlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
    }

    return(
        <>
            <Divider orientation="left" plain>Login</Divider>
            帳號：<Input value={account} onChange={hadleAccountChange}/> 密碼：<Input value={password} onChange={hadlePasswordChange}/> 
            <Button onClick={login} >lonin</Button>        
            <Books/>
        </>
    )
}

export default LoginPage;