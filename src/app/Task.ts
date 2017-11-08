export class Task {
  id: string;
  name: string;
  endTime: Date;
  startTime: Date;
  created_on: Date;
  done: boolean;
  description: string;
  location: string;

  edit: boolean;


  constructor(id: string, name: string, endTime: Date, startTime: Date, created_on: Date, done: boolean,
              description?: string, location?: string, edit: boolean = false) {
    this.id = id;
    this.name = name;
    this.endTime = endTime;
    this.startTime = startTime;
    this.created_on = created_on;
    this.done = done;
    this.description = description;
    this.location = location;
    this.edit = edit;
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

}
