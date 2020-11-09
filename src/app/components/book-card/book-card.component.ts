import {Component, Input} from '@angular/core';
import {BookModel} from "../../store/models/book.model";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book: BookModel;

  public onBookClick() {

  }
}
