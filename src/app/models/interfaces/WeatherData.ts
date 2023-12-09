export interface WeatherData {
  coord: {
    lon: number,
    lat: number
  },

  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],

  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    himidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  }
  dt: number
}