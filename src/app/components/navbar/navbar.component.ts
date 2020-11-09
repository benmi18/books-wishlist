import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {AuthState} from "../../store/state/auth.state";
import {Store} from "@ngrx/store";
import {State} from "../../store/state";
import {logout} from "../../store/actions/auth.actions";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Input('auth') auth$: Observable<AuthState>;

  constructor(private store: Store<State>) {
  }

  public onLogoutClick() {
    this.store.dispatch(logout());
  }
}
