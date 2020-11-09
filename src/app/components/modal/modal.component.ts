import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {BookModel} from "../../store/models/book.model";
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public book: BookModel) { }

  onAddToWishlistClick() {
    console.log('add to wishlist click')
  }
}
