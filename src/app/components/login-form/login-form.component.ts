import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailValidator} from "./validatores";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {State} from "../../store/state";
import {Subject} from "rxjs";
import {login} from "../../store/actions/auth.actions";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit, OnDestroy {
  private readonly onDestroy$ = new Subject<void>();

  public loginForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private store: Store<State>
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        emailValidator
      ]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  public onFormSubmit() {
    if (this.loginForm.status === 'VALID') {
      this.store.dispatch(login({email: this.email.value}));
      this.router.navigateByUrl('/search');
    }
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
