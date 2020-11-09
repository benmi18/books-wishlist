import {SearchBooksResModel} from "../models/book.model";

export interface BooksState {
    searchRes: SearchBooksResModel;
}

export const booksInitialState: BooksState = {
    searchRes: {
        items: [],
        kind: '',
        totalItems: null
    }
}
