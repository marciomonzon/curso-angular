import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/models/interfaces/WeatherData';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: []
})
export class WheaterHomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();

  initialCityName = 'São Paulo';
  country = 'br';
  weatherData!: WeatherData;

  constructor(private _weatherService: WeatherService){}

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName, this.country);
  }

  getWeatherData(cityName: string, country: string): void {

    this._weatherService.getWeatherData(cityName, country)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        response && (this.weatherData = response);
        console.log(this.weatherData);
      },
      error: (error) => {
        console.log(error);
      }
    })

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
