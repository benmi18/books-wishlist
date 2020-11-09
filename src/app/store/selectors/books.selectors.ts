import {createSelector} from '@ngrx/store';
import {State} from "../state";

export const getBooks = (state: State) => state.books;

export const selectSearchedBooks = createSelector(
    getBooks,
    books => books.searchRes.items
);
