import * as auth from "./auth.state";
import * as books from "./books.state";


export interface State {
    auth: auth.AuthState;
    books: books.BooksState
}
