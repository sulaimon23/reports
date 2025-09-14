import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { RISK_COUNTS } from '../../shared/constants/mock-data';


interface RiskStat {
  level: string;
  count: number;
  colorClass: string;
}

interface ChartSegment {
  percent: number;
  offset: number;
  colorClass: string;
}

@Component({
  selector: 'app-risk-chart',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './risk-chart.component.html',
  styleUrl: './risk-chart.component.scss'
})
export class RiskChartComponent {


  // Chart configuration
  protected readonly chartSize = 150;
  protected readonly chartCenter = 75;
  protected readonly chartRadius = 47.7; // Circumference of ~300 for percentage calculations

  // Computed values

  protected readonly riskCounts = computed(() => RISK_COUNTS);

  protected readonly riskStats = computed((): RiskStat[] => {
    const counts = this.riskCounts();

    return [
      { level: 'Critical', count: counts.critical, colorClass: 'critical' },
      { level: 'High', count: counts.high, colorClass: 'high' },
      { level: 'Medium', count: counts.medium, colorClass: 'medium' },
      { level: 'Low', count: counts.low, colorClass: 'low' },
    ];
  });

  protected readonly chartSegments = computed((): ChartSegment[] => {
    const counts = this.riskCounts();
    const total = counts.critical + counts.high + counts.medium + counts.low;

    if (total === 0) {
      return [];
    }

    const segments: ChartSegment[] = [];
    let offset = 0;

    const riskTypes = [
      { count: counts.critical, colorClass: 'critical' },
      { count: counts.high, colorClass: 'high' },
      { count: counts.medium, colorClass: 'medium' },
      { count: counts.low, colorClass: 'low' },
    ];

    // Only create segments for non-zero counts
    const nonZeroSegments = riskTypes.filter(risk => risk.count > 0);

    nonZeroSegments.forEach(risk => {
      const percent = (risk.count / total) * 100;
      segments.push({
        percent,
        offset,
        colorClass: risk.colorClass,
      });
      offset += percent;
    });

    return segments;
  });
}
