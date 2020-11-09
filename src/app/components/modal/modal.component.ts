import {ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BookModel} from "../../store/models/book.model";
import {select, Store} from "@ngrx/store";
import {State} from "../../store/state";
import {addToWishlist, removeFromWishlist} from "../../store/actions/wishlist.actions";
import {selectWishlistBooks} from "../../store/selectors/wishlist.selectors";
import {takeUntil, tap} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit, OnDestroy{
  private readonly onDestroy$ = new Subject<void>();

  public isInWishList: boolean;

  constructor(
      public dialogRef: MatDialogRef<ModalComponent>,
      @Inject(MAT_DIALOG_DATA) public book: BookModel,
      private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.checkIfBookInWishList();
  }

  private checkIfBookInWishList() {
    this.store.pipe(select(selectWishlistBooks)).pipe(
        tap((books) => {
          this.isInWishList = !!books.find(b => b.id === this.book.id);
        }),
        takeUntil(this.onDestroy$)
    ).subscribe()
  }

  onAddToWishlistClick() {
    this.store.dispatch(addToWishlist({book: this.book}));
    this.dialogRef.close();
  }

  onRemoveFromWishlistClick() {
    this.store.dispatch(removeFromWishlist({bookID: this.book.id}));
    this.dialogRef.close();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
