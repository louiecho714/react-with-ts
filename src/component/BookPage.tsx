import Books from './Books';
import {Button,Divider} from 'antd';
import {
deleteAllBooks,
getBooks
} from '../store/bookSlice'
import {useAppDispatch} from '../store/hooks'
const BookPage = () => {
    const dispatch = useAppDispatch();
    
    return(
        <>
            <Divider orientation="left" plain>Books</Divider>
            <Button onClick={()=>dispatch(getBooks())} >Get all books</Button>
            <Button onClick={()=>dispatch(deleteAllBooks())} >Delete all books</Button>
            <Books/>
        </>
    )
}

export default BookPage;