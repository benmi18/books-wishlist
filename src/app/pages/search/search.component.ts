import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Subject} from "rxjs";
import {debounceTime, takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new Subject<void>();

  public searchControl = new FormControl();

  constructor() { }

  ngOnInit() {
    this.handleOnSearch();
  }

  private handleOnSearch() {
    this.searchControl.valueChanges
        .pipe(
            debounceTime(250),
            tap((query: string) => console.log(query)), // TODO: Dispatch search api call
            takeUntil(this.onDestroy$)
        ).subscribe();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
