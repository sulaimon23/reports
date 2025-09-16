# Angular Project

A modern Angular 18 application built with standalone components, strict TypeScript, Tailwind CSS utilities, and Angular Material/CDK. This README documents architecture decisions and how to work with the project without exposing project-specific details.

## Tech Stack

- Angular 18 (standalone APIs, signals, strict templates)
- Angular Material 17 and CDK
- Tailwind CSS 3 + PostCSS/Autoprefixer
- TypeScript 5 (strict mode)
- ESLint + Prettier
- Husky + lint-staged for pre-commit checks
- RxJS 7, Zone.js

## Architecture Overview

- Standalone Components: No NgModules; components import their own dependencies.
- Routing: provideRouter with feature routes in src/app/app.routes.ts.
- State: Angular signals for local UI state; RxJS for reactive primitives as needed.
- UI: Angular Material for primitives (expansion panels, icons); Tailwind for layout/utility classes and design tokens.
- Styling: Tailwind configured in tailwind.config.js with extended color palette and shadows. Global styles in src/styles.scss.
- Strictness: TypeScript and Angular compiler strict options enabled (strictTemplates, strictInjectionParameters, etc.).

## Key Architectural Decisions (ADR)

1. Standalone + Signals

- Rationale: Faster boot, simpler composition, reduced NgModule overhead.
- Consequences: Prefer component-level imports; avoid shared NgModules.

2. Tailwind + Material Hybrid

- Rationale: Material gives accessible, robust components; Tailwind provides flexible layout and tokens.
- Consequences: Use Material for complex widgets (expansion, dialogs); Tailwind for spacing, flex/grid, colors, and typography.

3. Strict TypeScript/Angular

- Rationale: Catch issues at build time; safer refactors.
- Consequences: Maintain precise types, fix template type errors promptly.

4. Feature-First Organization

- Rationale: Co-locate template, styles, logic per feature for maintainability.
- Consequences: Features live under src/app/<feature> with internal components nested.

## Project Structure (high level)

- src/main.ts: Bootstraps app with application config
- src/app/app.config.ts: Global providers (router, animations, zone coalescing)
- src/app/app.routes.ts: Routes (default redirects to reports)
- src/app/app.component.\*: Shell with responsive sidebar using signals and animations
- src/app/reports/\*: Reports feature composed of:
  - risk-info: Accordion-like detail using MatExpansion
  - risk-chart: Chart UI container (stub for integration)
  - risk-table: Tabular data view
  - asset-flow: Graph/node visuals
  - shared/constants and shared/models for typed data
- public/\*.svg: Icon assets consumed by the shell
- tailwind.config.js: Content globs and design tokens
- src/styles.scss: Tailwind layers and global utilities

## Scripts

- Start dev server: npm run start (Angular CLI serve)
- Build production: npm run build
- Watch build (dev): npm run watch
- Test unit: npm run test
- Lint: npm run lint
- Format: npm run format

## Development Guidelines

- Component Style: Keep components focused; favor inputs/outputs or signals for local state.
- Imports: Import Angular Material modules at the component that uses them.
- Styling:
  - Use Tailwind utilities for layout/spacing/typography.
  - Use Material components for accessible UI primitives.
  - Centralize colors/tokens in tailwind.config.js; avoid hardcoded hex values in templates.
- Accessibility: Prefer Material components; ensure ARIA labels and focus management where custom elements are used.
- Testing: Write unit tests for components and pure logic. Keep tests deterministic and isolated.
- Lint/Format: Pre-commit hooks run ESLint and Prettier via lint-staged. Ensure both pass locally.

## Tailwind Notes

- Content scanning: ./src/\*_/_.{html,ts}
- Layers: components and utilities enabled in src/styles.scss. Add custom utilities under @layer utilities when needed.
- Extended theme includes semantic colors (red/green/yellow/purple/blue and gray.soft), box shadows, and border width.

## Extending the App

- New feature: create src/app/<feature> with standalone components. Add route in app.routes.ts.
- Reusable UI: prefer small, composable components; co-locate styles and tests.
- Data models: define in src/app/shared/models.ts and import where needed.
- Constants/mock data: place in src/app/shared/constants/ for easy replacement by real data later.

## Troubleshooting

- Common: Clear node_modules and reinstall if dependency issues occur.
- Verify versions in package.json if Angular CLI reports mismatches.
- Use Angular CLI docs for command help: https://angular.dev/tools/cli
