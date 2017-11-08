import {ITask} from './itask';

export class Task {
  id: string;
  name: string;
  endTime: Date;
  startTime: Date;
  created_on: Date;
  done: boolean;
  description?: string;
  location?: string;

  edit?: boolean;

  // constructor();
  // constructor(data?: ITask) {
  //
  // }

  // constructor(data?: any) {
  //   this.id=data.id;
  // }

  // constructor(id: string, name: string, endTime: Date, startTime: Date, created_on: Date, done: boolean,
  //             description?: string, location?: string, edit: boolean = false) {
  //   this.id = id;
  //   this.name = name;
  //   this.endTime = endTime;
  //   this.startTime = startTime;
  //   this.created_on = created_on;
  //   this.done = done;
  //   this.description = description;
  //   this.location = location;
  //   this.edit = edit;
  // }

}
