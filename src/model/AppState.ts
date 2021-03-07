import { BookModel } from "./BookModel";
import { ToDoItemModel } from "./ToDoItemModel";
import { UserModel } from "./UserModel";

export interface AppState {
    ToDoItems: ToDoItemModel[];
    Loading: boolean;
    Books: BookModel[];
    CurrentUser: UserModel|null;
}