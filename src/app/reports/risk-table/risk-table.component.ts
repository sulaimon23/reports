import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-risk-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './risk-table.component.html',
  styleUrls: ['./risk-table.component.scss'],
})
export class RiskTableComponent {
  // Mock data - in a real app this would come from a service
  private readonly assets = signal([
    {
      id: '1',
      name: 'Loremipsumdolorsit',
      ipAddress: '192.168.1.1',
      riskLevel: 'Critical',
      status: 'active',
      icon: 'server',
    },
    {
      id: '2',
      name: 'Loremipsumdolorsit002',
      ipAddress: '192.168.1.2',
      riskLevel: 'Critical',
      status: 'active',
      icon: 'server',
    },
    {
      id: '3',
      name: 'WebServer-Prod-01',
      ipAddress: '192.168.1.3',
      riskLevel: 'High',
      status: 'active',
      icon: 'server',
    },
    {
      id: '4',
      name: 'Database-Main',
      ipAddress: '192.168.1.4',
      riskLevel: 'High',
      status: 'active',
      icon: 'server',
    },
    {
      id: '5',
      name: 'LoadBalancer-01',
      ipAddress: '192.168.1.5',
      riskLevel: 'Medium',
      status: 'active',
      icon: 'server',
    },
    {
      id: '6',
      name: 'Application-Server-01',
      ipAddress: '192.168.1.6',
      riskLevel: 'Medium',
      status: 'active',
      icon: 'server',
    },
    {
      id: '7',
      name: 'FileServer-Backup',
      ipAddress: '192.168.1.7',
      riskLevel: 'Low',
      status: 'active',
      icon: 'server',
    },
    {
      id: '8',
      name: 'Monitoring-Node',
      ipAddress: '192.168.1.8',
      riskLevel: 'Low',
      status: 'active',
      icon: 'server',
    },
  ]);

  readonly currentPage = signal(1);
  readonly pageSize = signal(5);

  protected readonly totalPages = computed(() =>
    Math.ceil(this.assets().length / this.pageSize())
  );

  protected readonly paginatedAssets = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    const end = start + this.pageSize();
    return this.assets().slice(start, end);
  });

  protected readonly pageInfo = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize() + 1;
    const end = Math.min(this.currentPage() * this.pageSize(), this.assets().length);
    return `Showing ${start}-${end} of ${this.assets().length}`;
  });

  protected readonly shouldShowPagination = computed(() =>
    this.assets().length > this.pageSize()
  );

  protected nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }

  protected previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }
}
