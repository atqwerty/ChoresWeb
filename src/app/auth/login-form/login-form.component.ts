import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/classes/user/user';
import { UserFlowService } from 'src/app/services/userFlowService/user-flow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private loginForm: FormGroup
  public user: User

  constructor(private fb: FormBuilder, private userFlowService: UserFlowService, private router: Router) { }

  ngOnInit() {
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
    this.user = new User(this.email.value, this.password.value)
    this.userFlowService.passUserData(this.user)

    this.router.navigateByUrl('/main')
  }

}