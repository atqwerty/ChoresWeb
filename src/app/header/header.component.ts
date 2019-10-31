import { Component, OnInit } from '@angular/core';
import { UserFlowService } from 'src/app/services/userFlowService/user-flow.service';
import { User } from 'src/app/classes/user/user'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private user: User
  private loggedIn: boolean = false
  
  constructor(private router: Router, private userFlowService: UserFlowService) {
    this.userFlowService.passUserData$.subscribe((data) => {
      this.user = data

      if (this.user) this.loggedIn = true
    })
  }

  ngOnInit() {
  }

}
