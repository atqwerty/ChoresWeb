import { Component, OnInit } from '@angular/core';
import { UserFlowService } from 'src/app/services/userFlowService/user-flow.service';
import { User } from 'src/app/classes/user/user'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private user: User

  constructor(private userFlowService: UserFlowService) {
    this.userFlowService.passUserData$.subscribe((data) => {
      this.user = data
      console.log(this.user.getEmail())
    })
  }

  ngOnInit() {
  }

}
