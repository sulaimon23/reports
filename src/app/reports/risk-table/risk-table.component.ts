import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Asset } from '../../shared/models';
import { MOCK_ASSETS } from '../../shared/constants/mock-data';

@Component({
  selector: 'app-risk-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './risk-table.component.html',
  styleUrls: ['./risk-table.component.scss'],
})
export class RiskTableComponent {
  private readonly assets = signal<Asset[]>(MOCK_ASSETS);

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
