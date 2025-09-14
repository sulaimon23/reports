import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FrameConfig, ServerInfoComponent } from '../server-info/server-info.component';
import { ServerNodeComponent } from '../server-node/server-node.component';
import { GraphNodeComponent } from './graph-node/graph-node.component';

@Component({
  selector: 'asset-flow',
  standalone: true,
  imports: [
    CommonModule,
    GraphNodeComponent,
    ServerNodeComponent,
    ServerInfoComponent,
  ],
  templateUrl: './asset-flow.component.html',
  styleUrls: ['./asset-flow.component.scss'],
})
export class AssetFlowComponent {
  frameConfigs: FrameConfig[] = [
    {
      frameId: '1261165940',
      title: 'Loremipsumdolorsit',
      subtitle: '192.168.1.1',
      iconSrc: '/icon.svg',
      rows: [
        {
          hasIcon: true,
          label: 'Lorem:',
          badges: [
            { text: 'Lorem "Ipsum"', variant: 'yellow' }
          ],
        },
        {
          hasIcon: false,
          label: 'Loremipsum Lorem',
          badges: [
            { text: 'Lorem 1234,5678', variant: 'blue' }
          ],
        }
      ]
    },

    // Frame 2 - Top Right
    {
      frameId: '1261165941',
      title: 'Loremipsu',
      iconSrc: '/server.svg',
      rows: [
        {
          hasIcon: true,
          label: 'Lorem:',
          badges: [
            { text: '1.2.3.4', variant: 'purple' }
          ],
          trailingText: 'Loremipsum '
        },
        {
          hasIcon: false,
          label: 'Loremipsum',
          badges: [
            { text: '1.2.3.4', variant: 'purple' },
            { text: '1.2.3.4', variant: 'purple' }
          ],
          trailingText: 'Loremipsum'
        }
      ]
    },
  ];
}
