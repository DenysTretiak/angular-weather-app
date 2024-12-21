export interface ForecastInterface {
  list: ForecastListItem[];
  city: {
    name: string;
  }
}

export interface ForecastListItem {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    visibility: number;
    pop: number;
    snow?: {
        "3h": number;
    };
    sys: {
        pod: string;
    };
    dt_txt: string;
}