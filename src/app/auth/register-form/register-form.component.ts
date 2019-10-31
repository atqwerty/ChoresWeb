import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/classes/user/user';
import { UserFlowService } from 'src/app/services/userFlowService/user-flow.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  private registerForm: FormGroup
  public user: User

  constructor(
    private fb: FormBuilder,
    private userFlowService: UserFlowService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      emailReg: ['', [
        Validators.required,
        Validators.email
      ]],
      nameReg: ['', [
        Validators.required
      ]],
      surnameReg: ['', [
        Validators.required
      ]],
      passwordReg: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      confirmPassword: ['', [
        Validators.required
      ]]
    })
  }

  get emailReg() {
    return this.registerForm.get("emailReg")
  }

  get nameReg() {
    return this.registerForm.get("nameReg")
  }

  get surnameReg() {
    return this.registerForm.get("surnameReg")
  }

  get passwordReg() {
    return this.registerForm.get("passwordReg")
  }

  get confirmPassword() {
    return this.registerForm.get("confirmPassword")
  }

  onSubmit = () => {
    let data = this.authService.register(this.emailReg.value, this.nameReg.value, this.surnameReg.value, this.passwordReg.value)
  }
}