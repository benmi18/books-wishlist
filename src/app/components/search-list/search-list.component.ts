import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {State} from "../../store/state";
import {selectSearchedBooks} from "../../store/selectors/books.selectors";
import {Observable} from "rxjs";
import {BookModel} from "../../store/models/book.model";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  public searchedBooksList$: Observable<Array<BookModel>>

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.getSearchedBooksList();
  }

  private getSearchedBooksList() {
    this.searchedBooksList$ = this.store.pipe(select(selectSearchedBooks));
  }
}
