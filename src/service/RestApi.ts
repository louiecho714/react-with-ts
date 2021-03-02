import { BookModel } from '../model/BookModel';
import {Action} from '../store/Action'
import {AddAllBooks,StartLoading,StopLoading} from '../store/Actions'

export function getBooks(dispatch:React.Dispatch<Action>){
    
    dispatch(StartLoading())
    
    fetch(`https://5f891531a8a2b5001641f460.mockapi.io/api/v1/books`)
        .then(res => res.json())
        .then(
            (data:BookModel[]) => {
                console.log(data)
                dispatch(AddAllBooks(data));
                dispatch(StopLoading());
            },
            (err) => {
                dispatch(StopLoading());
                console.log("api err: ",err)
            }
        );
    
      
}