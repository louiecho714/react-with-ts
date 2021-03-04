import { BookModel } from "./BookModel";
import { ToDoItemModel } from "./ToDoItemModel";
import { UserModel } from "./UserModel";

export interface ToDoState {
    ToDoItems: ToDoItemModel[];
    Loading: boolean;
    Books: BookModel[];
    CurrentUser: UserModel|null;
}