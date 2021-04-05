import {getBooks} from '../service/RestApi'
import Books from './Books';
import {Button,Divider} from 'antd';
import { DeleteAllBooks } from '../store/Actions';
import { useAppSelector, useAppDispatch } from '../store/hooks'
import {
addAllBooks,
deleteAllBooks,
} from '../store/bookSlice'

const BookPage = () => {

    
    return(
        <>
            <Divider orientation="left" plain>Books</Divider>
            <Button onClick={()=>useAppDispatch(addAllBooks)} >Get all books</Button>
            <Button onClick={()=>deleteAllBooks()} >Delete all books</Button>
            <Books/>
        </>
    )
}

export default BookPage;