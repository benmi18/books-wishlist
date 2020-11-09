import {createAction, props} from '@ngrx/store';
import {SearchBooksResModel} from "../models/book.model";

export enum BooksActionsType {
    search= '[Books] Search',
    searchSuccess= '[Books] Search success'
}

export const searchBooks = createAction(
    BooksActionsType.search,
    props<{query: string}>()
);

export const searchBooksSuccess = createAction(
    BooksActionsType.searchSuccess,
    props<{searchRes: SearchBooksResModel}>()
);
