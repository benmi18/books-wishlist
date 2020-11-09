import {createSelector} from '@ngrx/store';
import {State} from "../state";

export const getWishlist = (state: State) => state.wishlist;

export const selectWishlistBooks = createSelector(
    getWishlist,
    wishlist => wishlist.wishlistBooks
);
