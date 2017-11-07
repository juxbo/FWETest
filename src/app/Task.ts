export class Task {
  id: string;
  name: string;
  done: boolean;
  edit: boolean;

  constructor(id: string, name: string, done: boolean, edit: boolean = false) {
    this.id = id;
    this.name = name;
    this.done = done;
    this.edit = edit;
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

}
