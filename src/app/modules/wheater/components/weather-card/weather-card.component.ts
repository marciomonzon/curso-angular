import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/interfaces/WeatherData';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit {

  @Input() weatherDataInput!: WeatherData;

  ngOnInit(): void {
    console.log("Dados recebido do componente pai weather home:", this.weatherDataInput);
  }

}
