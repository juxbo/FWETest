import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import {TASKS} from './mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = TASKS;
  newTask: Task;

  constructor() {
  }

  ngOnInit() {
    this.newTask = new Task();
  }

  toggleEdit(t: Task) {
    t.edit = !t.edit;
  }

}
