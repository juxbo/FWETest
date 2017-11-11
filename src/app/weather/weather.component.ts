import {Component, OnInit, Input} from '@angular/core';
import {TaskDataService} from '../task.data.service';
import {Task} from "../task";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [TaskDataService]
})
export class WeatherComponent implements OnInit {

  @Input() task: Task;

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  // lineChart
  public lineChartData: Array<any>;
  //   = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  //   {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  // ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor(private taskDataService: TaskDataService) {
  }

  ngOnInit() {
    // TODO: Remove this once onModalOpen works correctly (init is whenever a task is loaded which is too much)
    this.onModalOpen();
  }

  onModalOpen() {
    // TODO: Implement small global cache (daily)
    this.taskDataService
      .getTaskWeatherById(this.task._id)
      .subscribe(
        (weather) => {
          console.log(weather['list']);


          //TODO: JSON to array that chart can handle
          this.lineChartData = [{
            label: 'Test',
            data: weather['list']
          }];
          console.log(this.lineChartData);
          // TODO: Force update chart
        }
      );
  }

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
