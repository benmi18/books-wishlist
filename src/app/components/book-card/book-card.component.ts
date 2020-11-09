import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BookModel} from "../../store/models/book.model";
import {MatDialog} from "@angular/material/dialog";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent {
  @Input() book: BookModel;

  constructor(public dialog: MatDialog) {}

  public onBookClick() {
    this.dialog.open(ModalComponent, {data: this.book});
  }
}
