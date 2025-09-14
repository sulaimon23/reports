import { Component, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

interface IInfoCard {
  header: string;
  title: string;
  subtitle: string;
  content: string;
  description?: string;
}

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
  data = input.required<IInfoCard>();
}
