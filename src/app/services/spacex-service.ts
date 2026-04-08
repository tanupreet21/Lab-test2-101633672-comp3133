import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../../models/mission.model';

@Injectable({
  providedIn: 'root',
})

export class SpacexService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient){}

  /**
   * Gets list of all launches/missions
   */
  getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(this.baseUrl);
  }

  /**
   * Get missions by year
   */
  getMissionsByYear(year: String): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}?launch_year=${year}`);
  }

  /**
   * Get details for mission by id
   */
  getMissionDetailsById(id: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.baseUrl}/${id}`);
  }
} 
