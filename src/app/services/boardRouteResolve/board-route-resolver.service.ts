import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { BoardService } from '../board/board.service';

@Injectable({
  providedIn: 'root'
})
export class BoardRouteResolverService implements Resolve<any> {

  constructor(private boardService: BoardService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.boardService.getBoard(route.params.id)
    this.boardService.getStatuses(route.params.id)
  }
}
