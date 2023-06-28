import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, empty } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Country } from '../models/country.model';
import { State } from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<Country[]> {
    return this.http.get<{countries: Country[], states: State[]}>(this.baseUrl).pipe(
      map(data => data.countries)
    );
  }

  public getStates(countryId: number): Observable<State[]> {
    return this.http.get<{countries: Country[], states: State[]}>(this.baseUrl).pipe(
      map(data => data.states.filter(state => state.countryId == countryId))
    );
  }
}
