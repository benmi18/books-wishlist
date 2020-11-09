import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {BooksService} from "../../services/books.service";
import {BooksActionsType} from "../actions/books.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY, pipe} from "rxjs";
import {SearchBooksResModel} from "../models/book.model";



@Injectable()
export class BooksEffects {

  constructor(private actions$: Actions, private booksService: BooksService) {}

  searchBooks$ = createEffect(() => this.actions$.pipe(
      ofType(BooksActionsType.search),
      mergeMap(({query}) => this.booksService.searchBooks(query)),
      pipe(
          map((searchRes: SearchBooksResModel) => ({type: BooksActionsType.searchSuccess, searchRes})),
          catchError(() => EMPTY)
      )
  ));
}
