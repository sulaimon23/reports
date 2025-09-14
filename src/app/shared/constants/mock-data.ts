import { Asset, FrameConfig, InfoCard } from '../models';

export const MOCK_INFO_CARDS: InfoCard[] = [
  {
    header: 'Lorem P',
    title: 'Server',
    subtitle: 'Server',
    content: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.'
  },
  {
    header: 'Lorem P',
    title: 'Server',
    subtitle: 'Server',
    content: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.'
  },
  {
    header: 'Lorem P',
    title: 'Server',
    subtitle: 'Server',
    content: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc vitae tortor convallis vitae arcu. Magna.'
  }
];

export const MOCK_ASSETS: Asset[] = [
  { id: '1', name: 'Loremipsumdolorsit', ipAddress: '192.168.1.1', riskLevel: 'Critical', status: 'active', icon: 'server' },
  { id: '2', name: 'Loremipsumdolorsit002', ipAddress: '192.168.1.2', riskLevel: 'Critical', status: 'active', icon: 'server' },
  { id: '3', name: 'WebServer-Prod-01', ipAddress: '192.168.1.3', riskLevel: 'High', status: 'active', icon: 'server' },
  { id: '4', name: 'Database-Main', ipAddress: '192.168.1.4', riskLevel: 'High', status: 'active', icon: 'server' },
  { id: '5', name: 'LoadBalancer-01', ipAddress: '192.168.1.5', riskLevel: 'Medium', status: 'active', icon: 'server' },
  { id: '6', name: 'Application-Server-01', ipAddress: '192.168.1.6', riskLevel: 'Medium', status: 'active', icon: 'server' },
  { id: '7', name: 'FileServer-Backup', ipAddress: '192.168.1.7', riskLevel: 'Low', status: 'active', icon: 'server' },
  { id: '8', name: 'Monitoring-Node', ipAddress: '192.168.1.8', riskLevel: 'Low', status: 'active', icon: 'server' }
];

export const RISK_COUNTS = {
  critical: 2,
  high: 0,
  medium: 0,
  low: 0,
};

export const FRAME_CONFIGS: FrameConfig[] = [
  {
    frameId: '1261165940',
    title: 'Loremipsumdolorsit',
    subtitle: '192.168.1.1',
    iconSrc: '/icon.svg',
    rows: [
      { hasIcon: true, label: 'Lorem:', badges: [{ text: 'Lorem "Ipsum"', variant: 'yellow' }] },
      { hasIcon: false, label: 'Loremipsum Lorem', badges: [{ text: 'Lorem 1234,5678', variant: 'blue' }] }
    ]
  },
  {
    frameId: '1261165941',
    title: 'Loremipsu',
    iconSrc: '/server.svg',
    rows: [
      { hasIcon: true, label: 'Lorem:', badges: [{ text: '1.2.3.4', variant: 'purple' }], trailingText: 'Loremipsum ' },
      { hasIcon: false, label: 'Loremipsum', badges: [
        { text: '1.2.3.4', variant: 'purple' },
        { text: '1.2.3.4', variant: 'purple' }
      ], trailingText: 'Loremipsum' }
    ]
  }
];
