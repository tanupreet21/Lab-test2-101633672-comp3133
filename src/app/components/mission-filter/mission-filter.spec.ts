import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFilter } from './mission-filter';

describe('MissionFilter', () => {
  let component: MissionFilter;
  let fixture: ComponentFixture<MissionFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(MissionFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
