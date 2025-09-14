import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, computed, HostListener, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
interface NavItem {
  icon: string;
  label: string;
  active: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    CommonModule,
    MatIconModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    // Sidebar width animation
    trigger('sidebarAnimation', [
      state('expanded', style({
        width: '250px'
      })),
      state('collapsed', style({
        width: '80px'
      })),
      transition('expanded <=> collapsed', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ]),

    // Text fade animation
    trigger('textFade', [
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-10px)'
      })),
      transition('visible => hidden', [
        animate('150ms ease-in')
      ]),
      transition('hidden => visible', [
        animate('300ms 150ms ease-out')
      ])
    ]),

    // Mobile drawer animation
    trigger('mobileDrawer', [
      state('open', style({
        width: '250px',
        transform: 'translateX(0)'
      })),
      state('closed', style({
        width: '0px',
        padding: '0',
        transform: 'translateX(-100%)'
      })),
      transition('open <=> closed', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ]),
    //Mobile backdrop animation
    trigger('backdropAnimation', [
      state('visible', style({
        transform: 'translateX(0)',
        pointerEvents: 'auto'
      })),
      state('hidden', style({
        transform: 'translateX(-100%)',
        pointerEvents: 'none'
      })),
      transition('visible <=> hidden', [
        animate('300ms ease')
      ])
    ])
  ]
})
export class AppComponent {

  opened = signal(true);
  collapsed = signal(false);
  isMobile = signal(false);

  items = signal<NavItem[]>([
    { icon: 'dashboard', label: 'Lorem', active: false },
    { icon: 'vulnerabilities', label: 'Lorem', active: false },
    { icon: 'assets', label: 'Lorem', active: false },
    { icon: 'reports', label: 'Lorem', active: true },
    { icon: 'plug', label: 'Lorem', active: false },
    { icon: 'documentation', label: 'Lorem', active: false },
    { icon: 'filters', label: 'Lorem', active: false },
  ]);

  // Animation states
  sidebarState = computed(() =>
    this.collapsed() && !this.isMobile() ? 'collapsed' : 'expanded'
  );

  textState = computed(() =>
    this.collapsed() && !this.isMobile() ? 'hidden' : 'visible'
  );

  mobileDrawerState = computed(() =>
    this.opened() ? 'open' : 'closed'
  );

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    setTimeout(() => {
      const isMobileNow = window.innerWidth < 768;
      this.isMobile.set(isMobileNow);

      if (isMobileNow) {
        this.opened.set(false);
        this.collapsed.set(false);
      } else {
        this.opened.set(true);
      }

    }, 100);
  }

  toggle(): void {
    this.opened.update(opened => !opened);
  }

  toggleSidebar(): void {
    if (!this.isMobile()) {
      this.collapsed.update(collapsed => !collapsed);
    }
  }

  onItemClick(): void {
    if (this.isMobile()) {
      this.opened.set(false);
    }
  }

  getSvgIcon(icon: string): string {
    return `/${icon}.svg`;
  }

  getNavLinkClasses(isActive: boolean): string {
    const baseClasses = 'nav-link w-full px-3 py-2.5 border-0 bg-transparent flex items-center cursor-pointer transition-all duration-200 rounded-lg text-left text-gray-700 font-normal text-sm leading-6 relative group';
    const gapClass = this.collapsed() && !this.isMobile() ? 'justify-center' : 'gap-2.5';
    const activeClasses = isActive
      ? '!bg-green-50 text-gray-700'
      : 'hover:bg-green-50 hover:text-gray-700';

    return `${baseClasses} ${gapClass} ${activeClasses}`;
  }

  getSidebarClasses(): string {
    const baseClasses = 'bg-white shadow-lg rounded-xl flex flex-col transition-all duration-300 relative z-10 h-screen overflow-hidden';
    const mobileClasses = this.isMobile()
      ? 'fixed left-0 z-[1002]'
      : '';
    const padding = this.collapsed() && !this.isMobile() ? 'px-4 py-7' : 'p-7';

    return `${baseClasses} ${mobileClasses} ${padding}`.trim();
  }

}
