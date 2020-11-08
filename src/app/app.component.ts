import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {State} from "./store/state";
import {Observable} from "rxjs";
import {selectAuth} from "./store/selectors/auth.selectors";
import {AuthState} from "./store/state/auth.state";

@Component({
  selector: 'app-root',
  template: `
      <app-navbar *ngIf="(auth | async).isLoggedIn" [auth]="auth"></app-navbar>
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit{
  public auth: Observable<AuthState>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.getAuth();
  }

  private getAuth() {
    this.auth = this.store.pipe(select(selectAuth));
  }
}
