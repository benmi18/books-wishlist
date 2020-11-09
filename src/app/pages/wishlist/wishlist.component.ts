import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {State} from "../../store/state";
import {Observable} from "rxjs";
import {BookModel} from "../../store/models/book.model";
import {selectWishlistBooks} from "../../store/selectors/wishlist.selectors";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public wishlistBooks$: Observable<Array<BookModel>>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.getWishlistBooksList();
  }

  private getWishlistBooksList() {
    this.wishlistBooks$ = this.store.pipe(select(selectWishlistBooks));
  }
}
