import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Mission } from '../../../models/mission.model';
import { SpacexService } from '../../services/spacex-service';
import { MissionFilter } from '../mission-filter/mission-filter';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mission-list',
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MissionFilter
  ],
  templateUrl: './mission-list.html',
  styleUrl: './mission-list.css',
})
export class MissionList {
  missions: Mission[] = [];

  constructor(private spacexService: SpacexService){}

  ngOnInit(): void {
    this.loadAllMissions();
  }

  loadAllMissions(){
    this.spacexService.getAllMissions().subscribe({
      next: (data) => {
        this.missions = data;
      },
      error: (err) => {
        console.error('Error fetching missions:', err);
      }
    });
  }

  filterByYear(year: string) {
    if(!year) {
      this.loadAllMissions();
      return;
    }

    this.spacexService.getMissionsByYear(year).subscribe({
      next: (data) => {
        this.missions = data;
      },
      error: (err) => {
        console.error('Error filtering missions: ', err);
      }
    });
  }
}
