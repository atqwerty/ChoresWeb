import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MustMatch } from '../helpers/must-match-validator'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  private registerForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      emailReg: ['', [
        Validators.required,
        Validators.email
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

  get passwordReg() {
    return this.registerForm.get("passwordReg")
  }

  get confirmPassword() {
    return this.registerForm.get("confirmPassword")
  }
}
