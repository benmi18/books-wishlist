import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailValidator} from "./validatores";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

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
    if (this.loginForm.status === 'VALID')
      this.router.navigateByUrl('/search');
  }
}
