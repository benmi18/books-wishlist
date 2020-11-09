import { Action, createReducer, on } from '@ngrx/store';
import {booksInitialState, BooksState} from "../state/books.state";
import {searchBooksSuccess} from "../actions/books.actions";


export const booksReducer = createReducer(
  booksInitialState,
    on(searchBooksSuccess, (state, {searchRes}) => ({
        ...state,
        searchRes
    }))
);

export function reducer(state: BooksState | undefined, action: Action) {
    return booksReducer(state, action);
}
