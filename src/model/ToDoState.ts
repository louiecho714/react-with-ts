import { BookModel } from "./BookModel";
import { ToDoItemModel } from "./ToDoItemModel";

export interface ToDoState {
    ToDoItems: ToDoItemModel[];
    Loading: boolean;
    Books: BookModel[];
}