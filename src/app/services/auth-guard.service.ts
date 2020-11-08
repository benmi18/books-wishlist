import {Injectable} from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {select, Store} from "@ngrx/store";
import {State} from "../store/state";
import {selectAuth} from "../store/selectors/auth.selectors";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<State>, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.store.pipe(select(selectAuth))
        .pipe(map(auth => {
          if (!auth.isLoggedIn) {
            this.router.navigateByUrl('');
            return false;
          }
          return true;
        }));
  }
}
