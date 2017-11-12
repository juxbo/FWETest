export class Task {
  _id: string;
  title: string;
  endTime?: string;
  startTime?: string;
  created_on: string;
  done: boolean;
  description?: string;
  location?: string;
  elapsed?: number;
  private timer: NodeJS.Timer;
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

  startTimer() {
    this.elapsed = 1;
    this.timer = setInterval(() => this.elapsed = this.elapsed + 1, 1000);
  }

  endTimer() {
    clearInterval(this.timer);
  }

}
