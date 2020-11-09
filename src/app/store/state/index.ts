import * as auth from "./auth.state";
import * as books from "./books.state";
import * as wishlist from "./wishlist.state"


export interface State {
    auth: auth.AuthState;
    books: books.BooksState;
    wishlist: wishlist.WishlistState;
}
