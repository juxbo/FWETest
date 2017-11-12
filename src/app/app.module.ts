import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {TasksComponent} from './tasks/tasks.component';

import {TaskDataService} from './task.data.service';
import {ApiHttpService} from './api.service';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {WeatherComponent} from './weather/weather.component';
import {ApiMockService} from './api.mock.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [TaskDataService, ApiMockService, ApiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
