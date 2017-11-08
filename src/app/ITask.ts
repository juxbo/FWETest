export interface ITask {
  id: string;
  name: string;
  endTime: Date;
  startTime: Date;
  created_on: Date;
  done: boolean;
  description: string;
  location: string;

  edit: boolean;
//  TODO: Decide if this is smart
}
