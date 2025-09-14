import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AssetFlowComponent } from './asset-flow/asset-flow.component';
import { RiskChartComponent } from './risk-chart/risk-chart.component';
import { RiskInfoComponent } from "./risk-info/risk-info.component";
import { RiskTableComponent } from './risk-table/risk-table.component';

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
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

  cardData = new Array(3).fill({
    header: "Lorem P",
    title: "Server",
    subtitle: "Server",
    content: "Lorem ipsum dolor sit amet consectetur.",
    description: "Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna."
  });
}
