import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { DataFlowService } from '../dataFlowService/data-flow.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
    private dataFlowService: DataFlowService,
    private router: Router
  ) { }

  addTask(title, description, status, board_id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin' : '*'
      })
    }
    return this.http.post<any>('http://172.17.0.1:8080/board/' + board_id + '/task/create',
                        { title, description, status })
  }

  updateStatus(status_id, task_id, boardId) {
    return this.http.post<any>('http://172.17.0.1:8080/board/' + boardId + '/updateStatus',
                              { status_id, task_id })
  }
}
