import { Action, createReducer, on } from '@ngrx/store';
import {wishlistInitialState, WishlistState} from "../state/wishlist.state";
import {addToWishlist, removeFromWishlist} from "../actions/wishlist.actions";


export const wishlistReducer = createReducer(
  wishlistInitialState,
    on(addToWishlist, (state, {book}) => ({
        ...state,
        wishlistBooks: [...state.wishlistBooks, book]
    })),
    on(removeFromWishlist, (state, {bookID}) => ({
        ...state,
        wishlistBooks: state.wishlistBooks.filter(b => b.id !== bookID)
    }))
);

export function reducer(state: WishlistState | undefined, action: Action) {
    return wishlistReducer(state, action);
}
