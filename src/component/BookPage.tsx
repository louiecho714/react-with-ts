import {getBooks} from '../service/RestApi'
import Books from './Books';
import {Button,Divider} from 'antd';
import { DeleteAllBooks } from '../store/Actions';
import {useContext} from 'react';
import { AppContext } from "../store/Reducer";

const BookPage = () => {

    const {dispatch} = useContext(AppContext);
    
    return(
        <>
            <Divider orientation="left" plain>Books</Divider>
            <Button onClick={()=>getBooks(dispatch)} >Get all books</Button>
            <Button onClick={()=>dispatch(DeleteAllBooks())} >Delete all books</Button>
            <Books/>
        </>
    )
}

export default BookPage;