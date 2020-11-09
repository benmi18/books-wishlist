import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BookModel} from "../../store/models/book.model";
import {PageEvent} from "@angular/material/paginator";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksListComponent implements OnInit{

  public paginationPageSize: number = 10;
  public paginationList$: Observable<Array<BookModel>>;

  @Input('booksList') booksList$: Observable<Array<BookModel>>;

  private currentIndex: number = 0;

  ngOnInit(): void {
    this.loadPagination(this.currentIndex, this.paginationPageSize);
  }

  private loadPagination(pageIndex: number, pageSize: number) {
    this.paginationList$ = this.booksList$.pipe(
        map((books) => books.slice(pageIndex, pageIndex + pageSize))
    );
  }

  public onPageEvent($event: PageEvent) {
    const {pageIndex, previousPageIndex, pageSize} = $event;
    if (pageIndex > previousPageIndex) { // Go to next page
      this.currentIndex = this.currentIndex + pageSize;
      this.loadPagination(this.currentIndex, pageSize);
    } else { // Go to prev page
      this.currentIndex = this.currentIndex - pageSize;
      this.loadPagination(this.currentIndex, pageSize);
    }
  }
}
