import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

export type PopoverType = 'vulnerability' | 'normal';

export interface PopoverText {
  color?: string;
  value: string | null;
}

export interface PopoverInfo {
  label: string;
  text: PopoverText[];
}

export interface PopoverData {
  title: string;
  content: string;
  type: PopoverType;
  vulnerabilityLevel?: 'critical' | 'high' | 'medium' | 'low';
  additionalInfo?: PopoverInfo;
  badge?: unknown;
}


@Component({
  selector: 'app-graph-node',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
  ],
  templateUrl: './graph-node.component.html',
  styleUrls: ['./graph-node.component.scss'],
})
export class GraphNodeComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() customIcon = false;
  @Input() errorIcon = false;
  @Input() initialNode = false;

  iconClasses(): string {
    return this.initialNode
      ? 'bg-red-50 text-red-500'
      : 'bg-blue-50 text-blue-600';
  }

}
