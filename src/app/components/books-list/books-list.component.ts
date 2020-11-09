import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {BookModel} from "../../store/models/book.model";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BooksListComponent {
  @Input('booksList') booksList$: Observable<Array<BookModel>>;
}
