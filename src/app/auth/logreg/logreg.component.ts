import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginSubmition(emailLog, passwordLog) {
    if (!emailLog.value || !passwordLog.value) return

    this.router.navigateByUrl('/main');
    return
  }

  registerSubmition(emailReg, passwordReg, confirmPassword) {
    if(!emailReg.value.includes('@')) return
    if (!emailReg.value || !passwordReg.value) return
    if (passwordReg.value <= 6) return
    if (passwordReg.value != confirmPassword.value) return

    this.router.navigateByUrl('/main');
    return
  }

}
