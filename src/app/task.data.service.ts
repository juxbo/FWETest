import { Injectable } from '@angular/core';
import { Task } from './task';
import {ApiService} from './api.abstract';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import {ApiHttpService} from './api.service';

@Injectable()
export class TaskDataService {

  constructor(private api: ApiHttpService
  ) {
  }

  // Simulate POST /tasks
  addTask(task: Task): Observable<Task> {
    return this.api.createTask(task);
  }

  // Simulate DELETE /tasks/:_id
  deleteTaskById(taskId: string): Observable<Task> {
    return this.api.deleteTaskById(taskId);
  }

  // Simulate PATCH /tasks/:_id
  updateTask(task: Task): Observable<Task> {
    return this.api.updateTask(task);
  }

  // Simulate GET /tasks
  getAllTasks(): Observable<Task[]> {
    return this.api.getAllTasks().delay(3000);
  }

  // Simulate GET /tasks/:_id
  getTaskById(taskId: string): Observable<Task> {
    return this.api.getTaskById(taskId);
  }

  getTaskWeatherById(taskId: string): Observable<any> {
    return this.api.getTaskWeatherById(taskId);
  }
  getTaskCsvById(taskId: string): Observable<any> {
    return this.api.getTaskCsvById(taskId);
  }
  getAllTaskCsv(): Observable<any> {
    return this.api.getAllTaskCsv();
  }
}
