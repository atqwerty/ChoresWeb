import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFlowService } from 'src/app/services/userFlowService/user-flow.service';
import { User } from 'src/app/classes/user/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {
  public user: User

  constructor(private router: Router, private userFlowService: UserFlowService) { }

  ngOnInit() {
  }

  loginSubmition(emailLog, passwordLog) {
    if (!emailLog.value || !passwordLog.value) return

    this.user = new User(emailLog.value, passwordLog.value)
    this.userFlowService.passUserData(this.user);

    this.router.navigateByUrl('/main');
    return
  }

  registerSubmition(emailReg, passwordReg, confirmPassword) {
    if(!emailReg.value.includes('@')) return
    if (!emailReg.value || !passwordReg.value) return
    if (passwordReg.value <= 6) return
    if (passwordReg.value != confirmPassword.value) return

    this.user = new User(emailReg.value, passwordReg.value)
    this.userFlowService.passUserData(this.user);

    this.router.navigateByUrl('/main');
    return
  }

}
