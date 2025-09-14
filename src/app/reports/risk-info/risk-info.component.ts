import { Component, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { InfoCard } from '../../shared/models';

@Component({
  selector: 'app-risk-info',
  standalone: true,
  imports: [
    MatExpansionModule,
  ],
  templateUrl: './risk-info.component.html',
  styleUrl: './risk-info.component.scss'
})
export class RiskInfoComponent {
  data = input.required<InfoCard>();
}
