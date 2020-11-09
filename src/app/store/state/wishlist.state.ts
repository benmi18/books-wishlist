import {BookModel} from "../models/book.model";

export interface WishlistState {
    wishlistBooks: Array<BookModel>;
}

export const wishlistInitialState: WishlistState = {
    wishlistBooks: []
}
