# 📁 Mosaik Folder Structure & Naming Conventions

This [guide documents the folder structure and file naming conventions](https://mosaik.javascript.moe/mosaik/folder-structure) used in the **Mosaik** framework.

Mosaik follows a **slot-driven**, **themeable**, and **hybrid-rendering** architecture that encourages clean separation of concerns, modularity, and full SSR with interactivity.

---

## 🧠 Overview

```
src/
├── app/                 # Next.js app directory (layouts, routes, SSR)
│   └── mosaik/         # Main application namespace
│       ├── [...section]/
│       │   └── page.tsx        # Entry point for pages in a section
│       ├── layout.tsx          # Global app layout (SSR + slots)
│       ├── routes.ts           # Async + static route declarations
│       ├── state.ts           # Initial state definition
│       └── reducers.ts        # App reducer for global state
├── blocks/             # Smart components (business logic + slots)
│   ├── ActionBar.tsx          # Uses actions, provides UI
│   ├── ThemedComponent.tsx    # Renders theme-specific components
│   └── hybrid/               # Hybrid server/client components
│       ├── SidebarContent.tsx        # Server wrapper
│       ├── SidebarContentClient.tsx  # Client logic
│       ├── SidebarActionBar.tsx      # Hydrated version of ActionBar
├── components/         # Dumb/presentational components (unthemed)
│   └── Icon.tsx               # Themed icon helper
├── context/           # App-wide providers and hooks
│   └── StateContext.tsx      # Global app state provider (Flux)
├── features/          # Feature-specific logic and components
│   ├── desktop/              # Desktop-specific features
│   ├── sections/            # Section handling
│   └── sidebar/            # Sidebar behavior
├── lib/               # Utility functions and helpers
│   ├── mosaik/              # Core Mosaik functionality
│   │   ├── dataSources/     # Data fetching abstraction
│   │   └── routes.ts        # Route handling
│   ├── server/             # Server-only code
│   └── util/              # Shared utilities
├── layouts/           # Layout components for views/pages
│   └── DesktopColLayout.tsx # Main desktop layout using slots
└── themes/            # Theme definitions (one folder per theme)
    └── default/
        ├── index.tsx         # Theme configuration
        └── components/       # Themed components
```

---

## 📂 Core Concepts

### Slots
> Server-rendered layout composition system

- Define layout structure with slot placeholders
- Fill slots with SSR content
- Allow client-side hydration for interactivity

### Blocks
> Smart components that compose functionality

- Manage business logic and state
- Use themed components for visuals
- Support hybrid rendering (SSR + CSR)

### Themes
> Visual implementation of components

- Pure presentation
- Selected at runtime
- Support dark/light modes

---

## 🗂️ Folder Details

### `/app/mosaik`
Core application structure:
- `layout.tsx` - Root layout with slot composition
- `[...section]` - Dynamic section routing
- `state.ts` - Initial app state
- `reducers.ts` - State management

### `/blocks`
Smart components with logic:
- Use `ThemedComponent` for visuals
- Handle actions and state
- Support SSR via hybrid rendering

### `/features`
Feature-specific code:
- Grouped by domain (desktop, sidebar, etc)
- Contains slot generators
- Handles feature-specific state

### `/lib/mosaik`
Core framework code:
- Data fetching
- Route handling
- Server utilities

### `/themes`
Theme implementations:
- Visual components only
- Selected at runtime
- Support system preferences

---

## 📋 Conventions

### File Naming
- Blocks: `PascalCase.tsx`
- Slots: `getBlockNameSlots.tsx`
- Features: `camelCase.ts`
- Themes: Match block names

### Component Types
- Smart: Lives in `/blocks`
- Dumb: Lives in `/components`
- Themed: Lives in `/themes/{theme}/components`

### Slot Generation
- Always async functions
- Return JSX elements
- Support SSR + hydration

---

## 🔗 Learn More

**Documentation:** [https://mosaik.javascript.moe](https://mosaik.javascript.moe)

---

v0.0.1 — Last updated: August 6, 2025