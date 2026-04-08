import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Mission } from '../../../models/mission.model';
import { SpacexService } from '../../services/spacex-service';
import { MissionFilter } from '../mission-filter/mission-filter';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mission-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class MissionList implements OnInit{
  missions: Mission[] = [];

  constructor(
    private spacexService: SpacexService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.loadAllMissions();
  }

  loadAllMissions(): void{
    this.spacexService.getAllMissions().subscribe({
      next: (data) => {
        this.missions = data;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error fetching missions:', err);
      }
    });
  }

  filterByYear(year: string): void {
    const trimmedYear = year.trim();
    if(!trimmedYear) {
      this.loadAllMissions();
      return;
    }

    this.spacexService.getMissionsByYear(trimmedYear).subscribe({
      next: (data) => {
        this.missions = data;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error filtering missions: ', err);
      }
    });
  }
}
