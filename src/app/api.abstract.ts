import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Http, Response, ResponseContentType} from '@angular/http';
import {Task} from './task';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export abstract class ApiService {

  protected http: any;

  constructor(http: any) {
    this.http = http;
  }

  public abstract getAllTasks(): Observable<Task[]>;

  public abstract createTask(task: Task): Observable<Task>;

  public abstract getTaskById(taskId: string): Observable<Task>;

  public abstract getTaskWeatherById(taskId: string): Observable<any>;

  public abstract getAllTaskCsv(): Observable<any>;

  public abstract getTaskCsvById(taskId: string): Observable<any>;

  public abstract updateTask(task: Task): Observable<Task>;

  public abstract deleteTaskById(taskId: string): Observable<null>;

  abstract handleError(error: Response | any);
}
