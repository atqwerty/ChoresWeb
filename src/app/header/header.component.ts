import { Component, OnInit } from '@angular/core';
import { DataFlowService } from 'src/app/services/dataFlowService/data-flow.service';
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
  
  constructor(private router: Router, private dataFlowService: DataFlowService) {
    this.dataFlowService.passUserData$.subscribe((data) => {
      this.user = data

      if (this.user) this.loggedIn = true
    })
  }

  ngOnInit() {
  }

}
