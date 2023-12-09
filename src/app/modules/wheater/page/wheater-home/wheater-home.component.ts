import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/models/interfaces/WeatherData';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: []
})
export class WheaterHomeComponent implements OnInit {

  initialCityName = 'São Paulo';
  country = 'br';
  weatherData!: WeatherData;

  constructor(private _weatherService: WeatherService){}

  ngOnInit(): void {
    this.getWeatherData(this.initialCityName, this.country);
  }

  getWeatherData(cityName: string, country: string): void {

    this._weatherService.getWeatherData(cityName, country)
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

}
