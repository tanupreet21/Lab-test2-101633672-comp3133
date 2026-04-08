import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mission-filter',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './mission-filter.html',
  styleUrl: './mission-filter.css',
})
export class MissionFilter {
  year: string = '';

  @Output() yearFilter = new EventEmitter<string>();

  applyFilter(){
    this.yearFilter.emit(this.year);
  }

  clearFilter() {
    this.year = '';
    this.yearFilter.emit('');
  }
}
