import {Task} from '../task';

// _id: string, title: string, endTime: Date, startTime: Date, created_on: Date, done: boolean,
//   description?: string, location?: string, edit: boolean = false
export const TASKS: Task[] = [
  {
    _id: '16',
    title: 'Testen',
    startTime: new Date().toISOString().slice(0, 16),
    endTime: new Date().toISOString().slice(0, 16),
    created_on: new Date().toISOString().slice(0, 16),
    done: false
  },
  {
    _id: '17',
    title: 'Fixen',
    startTime: new Date().toISOString().slice(0, 16),
    endTime: new Date().toISOString().slice(0, 16),
    created_on: new Date().toISOString().slice(0, 16),
    done: false,
    description: 'Dies ist eine Beschreibung.',
    location: 'Ort 1'
  },
  {
    _id: '18',
    title: 'Weinen',
    startTime: new Date().toISOString().slice(0, 16),
    endTime: new Date().toISOString().slice(0, 16),
    created_on: new Date().toISOString().slice(0, 16),
    done: false
  },
  // new Task('17', 'Fixen', new Date(), new Date(), new Date(), false),
  // new Task('18', 'Weinen', new Date(), new Date(), new Date(), false),
  // new Task('19', 'Fixen', new Date(), new Date(), new Date(), false),
  // new Task('20', 'Lachen', new Date(), new Date(), new Date(), false, 'Nun darf gelacht werden', 'Zu Hause'),
  // new Task('21', 'Noch mehr weinen', new Date(), new Date(), new Date(), false, 'Es darf nicht mehr gelacht werden. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, no sea takimata sanctus est Lorem ipsum dolor sit amet.', 'Zu Hause')
];
