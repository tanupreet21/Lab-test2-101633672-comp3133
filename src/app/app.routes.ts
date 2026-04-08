import { Routes } from '@angular/router';
import { MissionList } from './components/mission-list/mission-list';
import { MissionDetails } from './components/mission-details/mission-details';

export const routes: Routes = [
    { path: '', component: MissionList},
    { path: 'mission/:id', component: MissionDetails}
];
