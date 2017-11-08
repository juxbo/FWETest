export class Task {
  _id: string;
  title: string;
  endTime: string;
  startTime: string;
  created_on: string;
  done: boolean;
  description?: string;
  location?: string;

  edit?: boolean;

  constructor(values?: Object) {
    Object.assign(this, values);
    if (this.startTime != null) {
      this.startTime = new Date(this.startTime).toISOString().slice(0, 16);
    }
    if (this.endTime != null) {
      this.endTime = new Date(this.endTime).toISOString().slice(0, 16);
    }


  }

  // constructor();
  // constructor(data?: ITask) {
  //
  // }

  // constructor(data?: any) {
  //   this._id=data._id;
  // }

  // constructor(_id: string, title: string, endTime: Date, startTime: Date, created_on: Date, done: boolean,
  //             description?: string, location?: string, edit: boolean = false) {
  //   this._id = _id;
  //   this.title = title;
  //   this.endTime = endTime;
  //   this.startTime = startTime;
  //   this.created_on = created_on;
  //   this.done = done;
  //   this.description = description;
  //   this.location = location;
  //   this.edit = edit;
  // }

}
