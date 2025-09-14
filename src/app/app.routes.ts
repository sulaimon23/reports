import { Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';

export const routes: Routes = [
  { path: 'reports', component: ReportsComponent },
  { path: '**', redirectTo: 'reports', pathMatch: 'full' },
];
