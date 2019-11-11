import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/route-animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [slideInAnimation]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
