import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/route-animation';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  animations: [slideInAnimation]
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
