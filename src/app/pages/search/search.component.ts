import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable, Subject} from "rxjs";
import {debounceTime, takeUntil, tap} from "rxjs/operators";
import {State} from "../../store/state";
import {select, Store} from "@ngrx/store";
import {searchBooks} from "../../store/actions/books.actions";
import {selectSearchedBooks} from "../../store/selectors/books.selectors";
import {BookModel} from "../../store/models/book.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new Subject<void>();

  public searchedBooks$: Observable<Array<BookModel>>
  public searchControl = new FormControl();

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.handleOnSearch();
    this.getSearchedBooksList();
  }

  private handleOnSearch() {
    this.searchControl.valueChanges
        .pipe(
            debounceTime(250),
            tap((query: string) => this.store.dispatch(searchBooks({query}))),
            takeUntil(this.onDestroy$)
        ).subscribe();
  }

  private getSearchedBooksList() {
    this.searchedBooks$ = this.store.pipe(select(selectSearchedBooks));
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
