import {Component, OnInit} from '@angular/core';
import {TaskDataService} from '../task.data.service';
import {Task} from '../task';
import {TASKS} from './mock-tasks';
import * as FileSaver from 'file-saver';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/timeout';
import {ApiMockService} from '../api.mock.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskDataService],
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  newTask: Task;
  loadingTasks = true;

  // TODO: initialize modal only after weather and then don't store it here
  weather: any;
  location: string;

  constructor(private taskDataService: TaskDataService) {
  }

  ngOnInit() {
    this.tasks = new Array<Task>();
    this.loadingTasks = true;
    console.log(this.loadingTasks);
    this.newTask = new Task();
    this.taskDataService
      .getAllTasks()
      .timeout(5000)
      .subscribe(
        (tasks) => {
          if (tasks != null) {
            this.tasks = tasks;
          }
          this.loadingTasks = false;
        }, (err) => {
          alert('Connection to task server timed out. Running mock implementation instead.');
          console.log(err);
          this.taskDataService = new TaskDataService(new ApiMockService());
          this.taskDataService.getAllTasks().subscribe((mocktasks) => {
            if (mocktasks != null) {
              this.tasks = mocktasks;
            }
            this.loadingTasks = false;
          });
        }
      );
  }

  secToDate(sec: number): Date {
    const d = new Date(1970, 0, 1);
    d.setSeconds(sec);
    return d;
  }

  toggleEdit(t: Task) {
    t.edit = !t.edit;
  }

  onDownloadAllCsv() {
    this.taskDataService
      .getAllTaskCsv()
      .subscribe(
        (res) => {
          const filename = 'tasks.csv';
          const blob = new Blob([res.blob()], {type: 'application/csv'});
          FileSaver.saveAs(blob, filename);
        }
      );
  }

  onDownloadCsv(task) {
    this.taskDataService
      .getTaskCsvById(task._id)
      .subscribe(
        (res) => {
          const filename = 'task_' + task._id + '.csv';
          const blob = new Blob([res.blob()], {type: 'application/csv'});
          FileSaver.saveAs(blob, filename);
        }
      );
  }

  onUpdateTask(task) {
    if (task.startTime == null) {
      task.endTimer();
    }
    this.taskDataService
      .updateTask(task)
      .subscribe(
        (updatedTask) => {
          task = updatedTask;
        }
      );
  }

  private startTask(t: Task) {
    t.startTime = new Date().toISOString().slice(0, 16);
    t.startTimer();
    this.onUpdateTask(t);
  }

  private endTask(t: Task) {
    t.endTime = new Date().toISOString().slice(0, 16);
    t.done = true;
    t.endTimer();
    this.onUpdateTask(t);
  }

  onAddTask(task) {
    this.taskDataService
      .addTask(task)
      .subscribe(
        (newTask) => {
          this.tasks = this.tasks.concat(newTask);
        }
      );
    this.resetNewTask();
  }

  private resetNewTask() {
    this.newTask = new Task();
  }

  onRemoveTask(task) {
    this.taskDataService
      .deleteTaskById(task._id)
      .subscribe(
        (_) => {
          this.tasks = this.tasks.filter((t) => t._id !== task._id);
        }
      );
  }

}
