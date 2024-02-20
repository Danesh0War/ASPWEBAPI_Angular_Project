import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BASE_SERVER_URL } from '../app.config';
import { Observable, map} from 'rxjs';
import { CityModel } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient,
    @Inject(BASE_SERVER_URL) private baseUrl: string) { }

    getCities() : Observable<CityModel[]> {
      return this.http.get(`${this.baseUrl}/cities`)
      .pipe(map((result) => <CityModel[]>(result)));
    }

    addCity(city: CityModel) : Observable<CityModel>{
      return this.http.post(`${this.baseUrl}/cities`, city)
      .pipe(map((result) => <CityModel>(result)));

    }
}
