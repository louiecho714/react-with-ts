import {Button,Divider,Input} from 'antd';
import { AddCurrentUser } from '../store/Actions';
import {useContext,useState} from 'react';
import { AppContext } from "../store/Reducer";
import {useHistory} from 'react-router-dom'

const LoginPage = () => {

    const {dispatch} = useContext(AppContext);
    const [account,setAccount]= useState("");
    const [password,setPassword]= useState("");
    const history = useHistory();


    const login = ()=>{
        dispatch(AddCurrentUser({token:"XXXXXOOOO",id:"id:"+account,name:account}));
        history.push("/main")
    }

    const hadleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setAccount(e.target.value)
    }

    const hadlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
    }

    return(
        <div style={{width:'300px', margin:"0 auto"}}>
            <Divider orientation="left" plain>Login</Divider>
            帳號：<Input value={account} onChange={hadleAccountChange}/> 密碼：<Input value={password} onChange={hadlePasswordChange}/> 
            <Button onClick={login} >lonin</Button>        
        </div>
    )
}

export default LoginPage;