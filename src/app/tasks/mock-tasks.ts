import {Task} from '../task';

// id: string, name: string, endTime: Date, startTime: Date, created_on: Date, done: boolean,
//   description?: string, location?: string, edit: boolean = false
export const TASKS: Task[] = [
  {id: '16', name: 'Testen', startTime: new Date(), endTime: new Date(), created_on: new Date(), done: false},
  {
    id: '17',
    name: 'Fixen',
    startTime: new Date(),
    endTime: new Date(),
    created_on: new Date(),
    done: false,
    description: 'Dies ist eine Beschreibung.',
    location: 'Ort 1'
  },
  {id: '18', name: 'Weinen', startTime: new Date(), endTime: new Date(), created_on: new Date(), done: false},
  // new Task('17', 'Fixen', new Date(), new Date(), new Date(), false),
  // new Task('18', 'Weinen', new Date(), new Date(), new Date(), false),
  // new Task('19', 'Fixen', new Date(), new Date(), new Date(), false),
  // new Task('20', 'Lachen', new Date(), new Date(), new Date(), false, 'Nun darf gelacht werden', 'Zu Hause'),
  // new Task('21', 'Noch mehr weinen', new Date(), new Date(), new Date(), false, 'Es darf nicht mehr gelacht werden. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'Zu Hause')
];
