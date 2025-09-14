import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeData, FrameConfig } from '../../shared/models';

@Component({
  selector: 'app-server-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-info.component.html',
  styleUrl: './server-info.component.scss'
})
export class ServerInfoComponent {
  @Input() config!: FrameConfig;

  trackByIndex(index: number): number {
    return index;
  }

  getBadgeClasses(badge: BadgeData): string {
    const baseClasses = 'badge inline-flex items-center justify-center gap-2.5 px-1 py-0.5 relative flex-[0_0_auto] rounded-md';

    if (badge.className) {
      return `${baseClasses} ${badge.className}`;
    }

    const variantClasses = {
      yellow: 'bg-yellow-50 text-yellow-600 font-semibold text-[13px] tracking-[0.13px]',
      green: 'bg-green-50 text-green-700 font-bold text-[15px] tracking-[0.15px]',
      purple: 'bg-purple-50 text-purple-600 font-semibold text-[13px] tracking-[0.13px]',
      blue: 'bg-blue-50 text-blue-700 font-semibold text-[13px] tracking-[0.13px]'
    } as const;

    return `${baseClasses} ${variantClasses[badge.variant]}`;
  }
}
