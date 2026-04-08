import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Mission } from '../../../models/mission.model';
import { SpacexService } from '../../services/spacex-service';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mission-details',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './mission-details.html',
  styleUrl: './mission-details.css',
})
export class MissionDetails implements OnInit{
  mission?: Mission;

  constructor(
    private route: ActivatedRoute,
    private spacexService: SpacexService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.spacexService.getMissionDetailsById(id).subscribe({
      next: (data) => {
        this.mission = data;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Error fetching mission details: ', err);
      }
    });
  }
}
