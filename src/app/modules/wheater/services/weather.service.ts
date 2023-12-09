import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private _apiKey = '88bebad0da2f251d3b8b7b588b554e60'

  constructor(private _http: HttpClient) {
  }

  getWeatherData(cityName: string, country: string): Observable<any> {
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${country}&APPID=${this._apiKey}`, {});
  }
}
