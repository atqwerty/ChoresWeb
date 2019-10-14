import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFlowService } from 'src/app/user-flow.service';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {
  public data = "asdf";

  constructor(private router: Router, private userFlowService: UserFlowService) { }

  ngOnInit() {
  }

  loginSubmition(emailLog, passwordLog) {
    if (!emailLog.value || !passwordLog.value) return

    this.userFlowService.passUserData(this.data);

    this.router.navigateByUrl('/main');
    return
  }

  registerSubmition(emailReg, passwordReg, confirmPassword) {
    if(!emailReg.value.includes('@')) return
    if (!emailReg.value || !passwordReg.value) return
    if (passwordReg.value <= 6) return
    if (passwordReg.value != confirmPassword.value) return

    this.userFlowService.passUserData(this.data);

    this.router.navigateByUrl('/main');
    return
  }

}
