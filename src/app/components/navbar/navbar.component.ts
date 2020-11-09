import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {AuthState} from "../../store/state/auth.state";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input('auth') auth$: Observable<AuthState>;
}
