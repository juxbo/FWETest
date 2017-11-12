import {Component, OnInit, Input} from '@angular/core';
import {TaskDataService} from '../task.data.service';
import {Task} from '../task';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [TaskDataService]
})
export class WeatherComponent implements OnInit {

  @Input() task: Task;

  public locationInvalid = false;
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartData: Array<any>;
  public lineChartLabels: Array<any> = [];
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
    { // red
      backgroundColor: 'rgba(255,0,0,0.2)',
      borderColor: 'rgba(255,0,0,1)',
      pointBackgroundColor: 'rgba(255,0,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,0,0,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(0,0,255,0.2)',
      borderColor: 'rgba(0,0,255,1)',
      pointBackgroundColor: 'rgba(0,0,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,0,255,0.8)'
    }
  ];

  constructor(private taskDataService: TaskDataService) {
  }

  ngOnInit() {
    this.lineChartData = [
      {data: [65], label: 'Temp'},
      {data: [65], label: 'Hum', hidden: true},
      {data: [65], label: 'Wind'},
      {data: [65], label: 'Rain'}
    ];
  }

  onModalOpen(id: string) {
    // TODO: Implement small global cache (daily)
    this.locationInvalid = false;
    this.taskDataService
      .getTaskWeatherById(this.task._id)
      .subscribe(
        (weather) => {
          if (weather['list'] == null) {
            this.locationInvalid = true;
            return;
          }

          const temps: any[] = new Array();
          const wind: any[] = new Array();
          const humidity: any[] = new Array();
          const rain: any[] = new Array();
          const lbls: string[] = new Array();

          for (let _i = 0; _i < weather['list'].length; _i++) {
            temps.push((weather['list'][_i].main.temp - 273).toFixed(2));
            humidity.push((weather['list'][_i].main.humidity));
            wind.push((weather['list'][_i].wind.speed));
            lbls.push(weather['list'][_i].dt_txt);
            if (weather['list'][_i].rain['3h'] == null) {
              rain.push(0);
            } else {
              rain.push(weather['list'][_i].rain['3h'].toFixed(4));
            }
          }

          this.lineChartLabels.length = 0;
          this.lineChartLabels.length = lbls.length;

          // XXX: Unfortunately labels can't be updated with chart.js so this will not show any labels even though it should.
          this.lineChartLabels = lbls;
          console.log(this.lineChartLabels);
          this.lineChartData = [
            {data: temps, label: 'Temperature °C'},
            {data: humidity, label: 'Humidity %'},
            {data: wind, label: 'Windspeed m/s'},
            {data: rain, label: 'Rain last 3h mm'}
          ];

          console.log(this.lineChartData);
        }, err => {
          this.locationInvalid = true;
        }
      );
  }

  public randomize(id: string): void {
    this.onModalOpen(id);
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
