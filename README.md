# My Vue Template

An opinionated Vue 3 + Vite starter focused on shipping product dashboards quickly. The template now showcases a richer UI example, modernized tooling, and a few batteries-included helpers so you can concentrate on product work instead of wiring the same scaffolding again.

## Stack Highlights

- Vue 3.5, Vite 7, Vue Router 4.6, and Pinia 3 for the core experience.
- TypeScript-first setup with stricter compiler settings and `vue-tsc` baked in.
- Tailwind CSS 3.4 with Radix Vue UI primitives, class variance helpers, and utility-first global styles.
- Axios-based HTTP client wired through `di-injectable` so services can be resolved in controllers and stores.
- Progressive Web App support via `vite-plugin-pwa@1.x`, `workbox-build`, and `workbox-window`.

## What’s New

- **Dashboard blueprint** – `/dashboard` now renders a production-style overview page backed by a Pinia store, mock API service, and mock JSON fixtures located in `public/mock/dashboard-summary.json`. It demonstrates stats cards, filterable execution tables, activity feeds, and capacity visualisations using the shared UI primitives.
- **Theme system** – a reusable `useTheme` composable keeps the light/dark preference in sync with the OS, powers the navbar switcher, and applies the right class on first paint.
- **PWA controls** – use the environment variables below to toggle the PWA plugin or switch its build mode without touching `vite.config.ts`.
- **DX upgrades** – dependency tree bumped to the latest stable releases, Tailwind Sass imports swapped to `@use`, `yarn type-check` is now reliable on Node 22, and `core/extensions` are registered automatically in `main.ts`.

## Commands

| Script | Description |
| ------ | ----------- |
| `yarn dev` | Start the Vite dev server. |
| `yarn build` | Production build (includes PWA assets if enabled). |
| `yarn preview` | Preview the production build locally. |
| `yarn type-check` | Run `vue-tsc` against `tsconfig.json`. |
| `yarn clean` | Remove `node_modules`, `yarn.lock`, and `dist`. |

## Environment Flags

Create an `.env` file (or export the variables inline) to control PWA behaviour:

```bash
# Enable or disable the PWA plugin (default: true)
VITE_ENABLE_PWA=true

# Build mode the PWA plugin should use (development skips terser to stay Node 22 friendly)
VITE_PWA_MODE=development
```

## Bootstrapping

To create a new project from this template:

```bash
npx degit farajshuaib/vue-starter-template my-project
cd my-project
yarn
yarn dev
```
