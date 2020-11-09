import { createAction, props } from '@ngrx/store';
import {BookModel} from "../models/book.model";

export enum WishlistActionsType {
    addToWishlist= '[Wishlist] Add to Wishlists',
    removeFromWishlist= '[Wishlist] Remove from Wishlists',
}

export const addToWishlist = createAction(
    WishlistActionsType.addToWishlist,
    props<{book: BookModel}>()
);

export const removeFromWishlist = createAction(
    WishlistActionsType.removeFromWishlist,
    props<{bookID: string}>()
);




