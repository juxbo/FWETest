import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Http, Response, ResponseContentType} from '@angular/http';
import {Task} from './task';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ApiService} from './api.abstract';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiHttpService extends ApiService {

  constructor(http: Http) {
    super(http);
  }

  public getAllTasks(): Observable<Task[]> {
    return this.http
      .get(API_URL + '/tasks')
      .map(response => {
        const tasks = response.json();
        return tasks.map((task) => new Task(task));
      })
      .catch(this.handleError);
  }

  public createTask(task: Task): Observable<Task> {
    return this.http
      .post(API_URL + '/tasks', task)
      .map(response => {
        return new Task(response.json());
      })
      .catch(this.handleError);
  }

  public getTaskById(taskId: string): Observable<Task> {
    return this.http
      .get(API_URL + '/tasks/' + taskId)
      .map(response => {
        return new Task(response.json());
      })
      .catch(this.handleError);
  }

  // TODO: Put observable of json type
  public getTaskWeatherById(taskId: string): Observable<any> {
    return this.http
      .get(API_URL + '/tasks/' + taskId + '/weather')
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public getAllTaskCsv(): Observable<any> {
    return this.http
      .get(API_URL + '/tasks/' + 'csv', { responseType: ResponseContentType.Blob })
      .map(response => {
        return response;
      })
      .catch(this.handleError);
  }

  public getTaskCsvById(taskId: string): Observable<any> {
    return this.http
      .get(API_URL + '/tasks/' + taskId + '/csv', { responseType: ResponseContentType.Blob })
      .map(response => {
        return response;
      })
      .catch(this.handleError);
  }

  public updateTask(task: Task): Observable<Task> {
    return this.http
      .patch(API_URL + '/tasks/' + task._id, task)
      .map(response => {
        return new Task(response.json());
      })
      .catch(this.handleError);
  }

  public deleteTaskById(taskId: string): Observable<null> {
    return this.http
      .delete(API_URL + '/tasks/' + taskId)
      .map(response => null)
      .catch(this.handleError);
  }

  handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
