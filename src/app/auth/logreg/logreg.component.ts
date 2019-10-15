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

  constructor() { }

  ngOnInit() {
  }

}
