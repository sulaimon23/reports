import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FRAME_CONFIGS } from '../../shared/constants/mock-data';
import { FrameConfig } from '../../shared/models';
import { ServerInfoComponent } from '../server-info/server-info.component';
import { ServerNodeComponent } from '../server-node/server-node.component';
import { GraphNodeComponent } from './graph-node/graph-node.component';

@Component({
  selector: 'app-asset-flow',
  standalone: true,
  imports: [CommonModule, GraphNodeComponent, ServerNodeComponent, ServerInfoComponent],
  templateUrl: './asset-flow.component.html',
  styleUrls: ['./asset-flow.component.scss'],
})
export class AssetFlowComponent {
  frameConfigs: FrameConfig[] = FRAME_CONFIGS;
}
