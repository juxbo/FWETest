import {Component, OnInit} from '@angular/core';
import {TaskDataService} from '../task.data.service';
import {Task} from '../task';
import {TASKS} from './mock-tasks';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TaskDataService]
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  newTask: Task;
  loadingTasks = true;

  constructor(private taskDataService: TaskDataService) {
  }

  ngOnInit() {
    this.loadingTasks = true;
    console.log(this.loadingTasks);
    this.newTask = new Task({startTime: new Date(), endTime: new Date()});
    this.taskDataService
      .getAllTasks()
      .subscribe(
        (tasks) => {
          this.tasks = tasks;
          this.loadingTasks = false;
        }
      );
  }

  toggleEdit(t: Task) {
    t.edit = !t.edit;
  }

  private resetNewTask() {
    this.newTask = new Task({startTime: new Date(), endTime: new Date()});
  }

  onCheckWeather(task) {
    this.taskDataService
      .getTaskWeatherById(task._id)
      .subscribe(
        (weather) => {
          // TODO: Do stuff with weather json
          console.log(weather);
        }
      );
  }

  onDownloadAllCsv() {
    this.taskDataService
      .getAllTaskCsv()
      .subscribe(
        (res) => {
          const filename = 'tasks.csv';
          const blob = new Blob([res.blob()], { type: 'application/csv' })
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
          const blob = new Blob([res.blob()], { type: 'application/csv' })
          FileSaver.saveAs(blob, filename);
        }
      );
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

  onUpdateTask(task) {
    this.taskDataService
      .updateTask(task)
      .subscribe(
        (updatedTask) => {
          task = updatedTask;
        }
      );
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
