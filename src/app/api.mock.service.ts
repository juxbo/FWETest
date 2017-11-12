import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Http, Response, ResponseContentType} from '@angular/http';
import {Task} from './task';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import {ApiService} from './api.abstract';
import {TASKS} from "./tasks/mock-tasks";

const API_URL = environment.apiUrl;

@Injectable()
export class ApiMockService extends ApiService {

  private tasks: Task[] = TASKS;
  private id = 333;

  constructor() {
    super(null);
  }

  public getAllTasks(): Observable<Task[]> {
    return Observable.of(this.tasks);
  }

  public createTask(task: Task): Observable<Task> {
    task._id = '' + this.id++;
    this.tasks.push(task);
    return Observable.of(task);
  }

  public getTaskById(taskId: string): Observable<Task> {
    let theTask;
    for (const t of this.tasks) {
      if (t._id === taskId) {
        theTask = t;
      }
    }
    return Observable.of(theTask);
  }

  // XXX: Only in real implementation
  public getTaskWeatherById(taskId: string): Observable<any> {
    return Observable.of(
      new Task({id: 1, title: 'Read article', complete: false})
    );
  }

  // XXX: Only in real implementation
  public getAllTaskCsv(): Observable<any> {
    return Observable.of(
      new Task({id: 1, title: 'Read article', complete: false})
    );
  }

  // XXX: Only in real implementation
  public getTaskCsvById(taskId: string): Observable<any> {
    return Observable.of(
      new Task({id: 1, title: 'Read article', complete: false})
    );
  }

  public updateTask(task: Task): Observable<Task> {
    return Observable.of(
      task
    );
  }

  public deleteTaskById(taskId: string): Observable<null> {
    this.tasks = this.tasks.filter(obj => obj._id !== taskId);
    return Observable.of();
  }

  handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
