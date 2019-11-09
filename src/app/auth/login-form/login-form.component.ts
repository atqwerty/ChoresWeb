import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user/user';
import { DataFlowService } from 'src/app/services/dataFlowService/data-flow.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private loginForm: FormGroup
  public user: User

  constructor(private fb: FormBuilder, private dataFlowService: DataFlowService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    console.log('welcome to logreg')
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    })
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  onSubmit = () => {
    this.authService.login(this.email.value, this.password.value)
  }

}