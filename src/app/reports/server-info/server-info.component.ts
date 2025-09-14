import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface BadgeData {
  text: string;
  variant: 'yellow' | 'green' | 'purple' | 'blue';
  className?: string;
}

export interface FrameConfig {
  frameId: string;
  title: string;
  subtitle?: string;
  iconSrc: string;
  rows: RowConfig[];
}

export interface RowConfig {
  hasIcon?: boolean;
  label?: string;
  badges: BadgeData[];
  trailingText?: string;
}

@Component({
  selector: 'app-server-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './server-info.component.html',
  styleUrl: './server-info.component.scss'
})
export class ServerInfoComponent {
  @Input() config!: FrameConfig;

  trackByIndex(index: number, item: any): number {
    return index;
  }

  getBadgeClasses(badge: BadgeData): string {
    const baseClasses = 'badge inline-flex items-center justify-center gap-2.5 px-1 py-0.5 relative flex-[0_0_auto] rounded-md';

    if (badge.className) {
      return `${baseClasses} ${badge.className}`;
    }

    // Default classes based on variant
    const variantClasses = {
      yellow: 'bg-yellow-50 text-yellow-600 font-semibold text-[13px] tracking-[0.13px]',
      green: 'bg-green-50 text-green-700 font-bold text-[15px] tracking-[0.15px]',
      purple: 'bg-purple-50 text-purple-600 font-semibold text-[13px] tracking-[0.13px]',
      blue: 'bg-blue-50 text-blue-700 font-semibold text-[13px] tracking-[0.13px]'
    };

    return `${baseClasses} ${variantClasses[badge.variant]}`;
  }

}
