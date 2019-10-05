import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerSubmition(emailReg, passwordReg, confirmPassword) {
    if(!emailReg.value.includes('@')) return false;
    if (!emailReg.value || !passwordReg.value) return false
    if (passwordReg.value <= 6) return false
    if (passwordReg.value != confirmPassword.value) return false

    alert('Registered!')
    return true;
  }

}
