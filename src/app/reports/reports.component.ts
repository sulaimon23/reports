import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AssetFlowComponent } from './asset-flow/asset-flow.component';
import { RiskChartComponent } from './risk-chart/risk-chart.component';
import { RiskInfoComponent } from './risk-info/risk-info.component';
import { RiskTableComponent } from './risk-table/risk-table.component';
import { MOCK_INFO_CARDS } from '../shared/constants/mock-data';
import { InfoCard } from '../shared/models';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    RiskTableComponent,
    RiskChartComponent,
    MatIconModule,
    RiskInfoComponent,
    AssetFlowComponent,
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent {
  cardData: InfoCard[] = MOCK_INFO_CARDS;
}
